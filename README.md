# react-native-form

  <h3> Installing Gradle with SDK </h3>

  curl -s "https://get.sdkman.io" | bash
  
  source "$HOME/.sdkman/bin/sdkman-init.sh"

  sdk install gradle 4.10.1

  <h3> runningEmulator.sh </h3>

  opt=$(zenity --title="Choose AVD" --text="Select a emulator to start:" --list \
                   --column="Devices" --separator="\n" `$ANDROID_HOME/emulator/emulator -list-avds`);
                   
  sudo chmod 777 /dev/kvm
  
  $ANDROID_HOME/emulator/emulator -avd $opt -wipe-data -no-snapshot-load &
  
  <h3> Running app </h3>

  npm install
  
  react-native run-android
