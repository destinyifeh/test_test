fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## Android

### android test

```sh
[bundle exec] fastlane android test
```

Runs all the tests

### android debugBuild

```sh
[bundle exec] fastlane android debugBuild
```

Build a debug APK

### android releaseBuild

```sh
[bundle exec] fastlane android releaseBuild
```

Build a release APK

### android build_split_apks

```sh
[bundle exec] fastlane android build_split_apks
```

Build APKs for all architectures

### android build_universal_apk

```sh
[bundle exec] fastlane android build_universal_apk
```

Build universal APK

### android build_aab

```sh
[bundle exec] fastlane android build_aab
```

Build AAB

### android build_aab2

```sh
[bundle exec] fastlane android build_aab2
```

Build AAB bundle

### android build_aab3

```sh
[bundle exec] fastlane android build_aab3
```

Build AAB bundle

### android beta

```sh
[bundle exec] fastlane android beta
```

Submit a new Beta Build to Crashlytics Beta

### android deploy

```sh
[bundle exec] fastlane android deploy
```

Deploy a new version to the Google Play

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
