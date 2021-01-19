<?php

declare(strict_types=1);

namespace PackageVersions;

use Composer\InstalledVersions;
use OutOfBoundsException;

class_exists(InstalledVersions::class);

/**
 * This class is generated by composer/package-versions-deprecated, specifically by
 * @see \PackageVersions\Installer
 *
 * This file is overwritten at every run of `composer install` or `composer update`.
 *
 * @deprecated in favor of the Composer\InstalledVersions class provided by Composer 2. Require composer-runtime-api:^2 to ensure it is present.
 */
final class Versions
{
    /**
     * @deprecated please use {@see self::rootPackageName()} instead.
     *             This constant will be removed in version 2.0.0.
     */
    const ROOT_PACKAGE_NAME = 'agentejo/cockpit';

    /**
     * Array of all available composer packages.
     * Dont read this array from your calling code, but use the \PackageVersions\Versions::getVersion() method instead.
     *
     * @var array<string, string>
     * @internal
     */
    const VERSIONS          = array (
  'bacon/bacon-qr-code' => '2.0.3@3e9d791b67d0a2912922b7b7c7312f4b37af41e4',
  'claviska/simpleimage' => '3.6.0@d4652ab80aa87d3f5bb6daa857ca6d57c1b421a1',
  'colinodell/json5' => 'v2.2.0@dd7f788c5de3837d1483a216dc9b30e5d9c8c00a',
  'composer/package-versions-deprecated' => '1.11.99.1@7413f0b55a051e89485c5cb9f765fe24bb02a7b6',
  'dasprid/enum' => '1.0.3@5abf82f213618696dda8e3bf6f64dd042d8542b2',
  'firebase/php-jwt' => 'v5.2.0@feb0e820b8436873675fd3aca04f3728eb2185cb',
  'jean85/pretty-package-versions' => '1.5.1@a917488320c20057da87f67d0d40543dd9427f7a',
  'ksubileau/color-thief-php' => 'v1.4.1@fc2acefacbd037f68cf61bcc62b30ac1bb16ed59',
  'league/color-extractor' => '0.3.2@837086ec60f50c84c611c613963e4ad2e2aec806',
  'league/flysystem' => '1.1.3@9be3b16c877d477357c015cec057548cf9b2a14a',
  'league/mime-type-detection' => '1.5.1@353f66d7555d8a90781f6f5e7091932f9a4250aa',
  'maennchen/zipstream-php' => 'v0.5.2@95922b6324955974675fd4923f987faa598408af',
  'mongodb/mongodb' => '1.8.0@953dbc19443aa9314c44b7217a16873347e6840d',
  'phpmailer/phpmailer' => 'v6.2.0@e38888a75c070304ca5514197d4847a59a5c853f',
  'robthree/twofactorauth' => '1.7.0@37983bf675c5baca09d19d6705170489d0df0002',
  'symfony/polyfill-php80' => 'v1.22.0@dc3063ba22c2a1fd2f45ed856374d79114998f91',
  'agentejo/cockpit' => '1.0.0+no-version-set@',
);

    private function __construct()
    {
    }

    /**
     * @psalm-pure
     *
     * @psalm-suppress ImpureMethodCall we know that {@see InstalledVersions} interaction does not
     *                                  cause any side effects here.
     */
    public static function rootPackageName() : string
    {
        if (!class_exists(InstalledVersions::class, false) || !InstalledVersions::getRawData()) {
            return self::ROOT_PACKAGE_NAME;
        }

        return InstalledVersions::getRootPackage()['name'];
    }

    /**
     * @throws OutOfBoundsException If a version cannot be located.
     *
     * @psalm-param key-of<self::VERSIONS> $packageName
     * @psalm-pure
     *
     * @psalm-suppress ImpureMethodCall we know that {@see InstalledVersions} interaction does not
     *                                  cause any side effects here.
     */
    public static function getVersion(string $packageName): string
    {
        if (class_exists(InstalledVersions::class, false) && InstalledVersions::getRawData()) {
            return InstalledVersions::getPrettyVersion($packageName)
                . '@' . InstalledVersions::getReference($packageName);
        }

        if (isset(self::VERSIONS[$packageName])) {
            return self::VERSIONS[$packageName];
        }

        throw new OutOfBoundsException(
            'Required package "' . $packageName . '" is not installed: check your ./vendor/composer/installed.json and/or ./composer.lock files'
        );
    }
}
