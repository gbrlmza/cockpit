<?php

namespace App\Controller;


class Users extends App {

    public function index() {

        return $this->render('app:views/users/index.php');
    }

    public function user($id = null) {

        if (!$id) {
            $id = $this->user['_id'];
        }

        $user = $this->app->data->findOne('system/users', ['_id' => $id]);

        if (!$user) {
            return false;
        }

        unset($user["password"]);

        return $this->render('app:views/users/user.php', compact('user'));
    }

    public function create() {

        $user = [
            'active' => true,
            'user'   => '',
            'email'  => '',
            'group'  => 'admin',
            'i18n'   => $this->app->helper('i18n')->locale
        ];
        
        return $this->render('app:views/users/user.php', compact('user'));
    }

    public function save() {

        $user = $this->param('user');

        if (!$user) {
            return $this->stop(['error' => 'User data is missing'], 412);
        }

        $user['_modified'] = time();
        $isUpdate = isset($user['_id']);

        if (!$isUpdate) {

            // new user needs a password
            if (!isset($user['password']) || !trim($user['password'])) {
                return $this->stop(['error' => 'User password required'], 412);
            }

            if (!isset($user['user']) || !trim($user['user'])) {
                return $this->stop(['error' => 'Username required'], 412);
            }

            $user['_created'] = $user['_modified'];
        }
        
        if (isset($user['password'])) {

            if (strlen($user['password'])){
                $user['password'] = $this->app->hash($user['password']);
            } else {
                unset($user['password']);
            }
        }

        if (isset($user['email']) && !$this->helper('utils')->isEmail($user['email'])) {
            return $this->stop(['error' => 'Valid email required'], 412);
        }

        if (isset($user['user']) && !trim($user['user'])) {
            return $this->stop(['error' => 'Username cannot be empty!'], 412);
        }

        if (isset($user['name']) && !trim($user['name'])) {
            return $this->stop(['error' => 'Name cannot be empty!'], 412);
        }

        foreach (['name', 'user', 'email'] as $key) {
            $user[$key] = strip_tags(trim($user[$key]));
        }

        // unique check

        $_user = $this->app->data->findOne('system/users', ['user' => $user['user']]);

        if ($_user && (!isset($user['_id']) || $user['_id'] != $_user['_id'])) {
            $this->app->stop(['error' =>  'Username is already used!'], 412);
        }

        $_user = $this->app->data->findOne('system/users', ['email'  => $user['email']]);

        if ($_user && (!isset($user['_id']) || $user['_id'] != $_user['_id'])) {
            $this->app->stop(['error' =>  'Email is already used!'], 412);
        }
        // --

        $this->app->trigger('app.users.save', [&$user, $isUpdate]);
        $this->app->data->save('system/users', $user);

        $user = $this->app->data->findOne('system/users', ['_id' => $user['_id']]);

        unset($user['password'], $user['_reset_token']);

        if ($user['_id'] == $this->user['_id']) {
            $this->helper('auth')->setUser($user);
        }

        return $user;
    }

    public function load() {

        \session_write_close();

        $options = array_merge([
            'sort'   => ['user' => 1]
        ], $this->param('options', []));

        if (isset($options['filter']) && is_string($options['filter'])) {

            $filter = null;

            if (\preg_match('/^\{(.*)\}$/', $options['filter'])) {

                try {
                    $filter = json5_decode($options['filter'], true);
                } catch (\Exception $e) {}
            }

            if (!$filter) {
                $filter = [
                    '$or' => [
                        ['name' => ['$regex' => $options['filter']]],
                        ['user' => ['$regex' => $options['filter']]],
                        ['email' => ['$regex' => $options['filter']]],
                    ]
                ];
            }

            $options['filter'] = $filter;
        }

        $users = $this->app->data->find('system/users', $options)->toArray();
        $count = (!isset($options['skip']) && !isset($options['limit'])) ? count($users) : $this->app->data->count('system/users', isset($options['filter']) ? $options['filter'] : []);
        $pages = isset($options['limit']) ? ceil($count / $options['limit']) : 1;
        $page  = 1;

        if ($pages > 1 && isset($options['skip'])) {
            $page = ceil($options['skip'] / $options['limit']) + 1;
        }

        foreach ($users as &$user) {
            $this->app->trigger('app.user.disguise', [&$user]);
        }

        return compact('users', 'count', 'pages', 'page');
    }
}