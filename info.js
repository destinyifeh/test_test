// # This file contains the fastlane.tools configuration
// # You can find the documentation at https://docs.fastlane.tools
// #
// # For a list of all available actions, check out
// #
// #     https://docs.fastlane.tools/actions
// #
// # For a list of all available plugins, check out
// #
// #     https://docs.fastlane.tools/plugins/available-plugins
// #

// # Uncomment the line if you want fastlane to automatically update itself
// # update_fastlane

// default_platform(:android)

// platform :android do
//   desc "Runs all the tests"
//   lane :test do
//     gradle(task: "test")
//   end

//   desc "Build a debug APK"
//   lane :debugBuild do
//     gradle(
//       task: "assembleDebug"
//     )
//   end

//   desc "Build a release APK"
//   lane :releaseBuild do
//     gradle(
//       task: "assembleRelease"
//     )
//   end

//   desc "Build APKs for all architectures"
//   lane :build_split_apks do
//     gradle(
//       task: "assemble",
//       build_type: "Release",
//       print_command: true
//     )
//   end

//    desc "Build universal APK"
//    lane :build_universal_apk do
//     gradle(
//      task: "assembleRelease",
//      print_command: true
//     )
//    end
// # Build aab
//    desc "Build AAB"
//    lane :build_aab do
//     gradle(task: "clean")
//      # Bundle JS before building
//     sh "npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res"
//     gradle(
//       task: "bundle",
//       build_type: "Release",
//       print_command: true
//     )
//     end

//   # Build aab 2
//     desc "Build AAB bundle"
//     lane :build_aab2 do
//         # ENV['FOLDER_ID'] = '.env'
//      # Bundle JS before building
//      # android_set_version_code
//      increment_version_name(app_project_dir: '**/app', bump_type: 'minor')
//      increment_version_code(app_project_dir: '**/app')
//      sh "npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res"
//       gradle(
//        task: " clean assembleRelease",
//       )

//       upload_to_google_drive(
//       drive_keyfile: "app/drive-storage.json",
//       # or you can provide the content of JSON keyfile directly as an argument
//       # drive_key_json: __KEYFILE_CONTENT__,
//       service_account: true,
//       folder_id: ENV['FOLDER_ID'] = ".env",
//       upload_files: ["app/build/outputs/apk/release/app-armeabi-v7a-release.apk"]
//     )

//      end

//       # Build aab 2
//     desc "Build AAB bundle"
//     lane :build_aab3 do
//      # Bundle JS before building
//      # android_set_version_code
//      #increment_version_name(app_project_dir: '**/app', bump_type: 'minor')
//      #increment_version_code(app_project_dir: '**/app')
//     # sh "npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res"
//     sh("npm test")
//     gradle(
//        task: " bundleRelease",
//       )

//     slack(
//      slack_url: 'https://hooks.slack.com/services/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',
//     message: "✅ App successfully released!",
//     success: true
//     )
//      end

//   desc "Submit a new Beta Build to Crashlytics Beta"
//   lane :beta do
//     gradle(task: "clean assembleRelease")
//     crashlytics

//     # sh "your_script.sh"
//     # You can also use other beta testing services here
//   end

//   desc "Deploy a new version to the Google Play"
//   lane :deploy do
//     gradle(task: "clean assembleRelease")
//     upload_to_play_store
//   end
// end
