# MOBB

<h3> Installing Gradle with SDK

export HTTP_PROXY=http://CHAVE:SENHA@localhost:40080
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk install gradle 4.10.1

<h3> Setting Gradle proxy

gedit .gradle/gradle.properties

systemProp.http.proxyHost=localhost
systemProp.http.proxyPort=40080
systemProp.http.proxyUser=CHAVE
systemProp.http.proxyPassword=SENHA
systemProp.https.proxyHost=localhost
systemProp.https.proxyPort=40080
systemProp.https.proxyUser=CHAVE
systemProp.https.proxyPassword=SENHA

<h3> runningEmulator.sh

opt=$(zenity --title="Choose AVD" --text="Select a emulator to start:" --list \
                   --column="Devices" --separator="\n" `$ANDROID_HOME/emulator/emulator -list-avds`);
sudo chmod 777 /dev/kvm
$ANDROID_HOME/emulator/emulator -avd $opt -wipe-data -no-snapshot-load &

<h3> Running app

npm install
react-native run-android