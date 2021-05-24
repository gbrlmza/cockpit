<?php

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ObjectType;
use App\GraphQL\Types\JsonType;

return [

    'type' => Type::listOf(JsonType::instance()),

    'args' => [
        'model'  => Type::nonNull(Type::string()),
        '_id'   => Type::string(),
        'limit' => Type::int(),
        'skip'  => Type::int(),
        'sort'  => JsonType::instance(),
        'lang'  => Type::string(),
        'populate'   => ['type' => Type::int(), 'defaultValue' => 0],
        'projection' => ['type' => Type::string(), 'defaultValue' => ''],
        'filter'   => ['type' => JsonType::instance(), 'defaultValue' => '']
    ],

    'resolve' => function ($root, $args) use($app) {

        $model = $args['model'];

        if (!$app->module('content')->exists($model)) {
            return [];
        }

        $meta = $app->module('content')->model($model);

        if ($meta['type'] == 'singleton') {
            return [$app->module('content')->item($model)];
        }

        $options  = [];
        $filter   = [];
        $populate = $args['populate'];

        if (isset($args['lang']) && $args['lang']) {
            $filter['lang'] = $args['lang'];
        }

        if (isset($args['_id']) && $args['_id']) {

            return [$app->module('content')->item($model, [
                '_id' => $args['_id']
            ], null, $populate, $filter)];

        } else {

            $options['populate'] = $populate;

            if (isset($args['limit'])) $options['limit'] = $args['limit'];
            if (isset($args['skip'])) $options['skip'] = $args['skip'];

            if (isset($args['sort'])) {
                $options['sort'] = $args['sort'];
            }

            if ($args['filter']) {
                $options['filter'] = $args['filter'];
            }

            return $app->module('content')->items($model, $options);
        }
    }
];
