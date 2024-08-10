{pkgs}: {
  deps = [
    pkgs.webtorrent_desktop
    pkgs.haskellPackages.webdriver-w3c
    pkgs.llvmPackages_6.libllvm
    pkgs.nwg-drawer
    pkgs.home-assistant-component-tests.lyric
    pkgs.quicklispPackages.cl-who
    pkgs.haskellPackages.servant-streaming-server
    pkgs.haskellPackages.servant-client_0_20
    pkgs.python310Packages.servefile
    pkgs.haskellPackages.servant-jquery
    pkgs.haskellPackages.servant-kotlin
    pkgs.haskellPackages.servant-foreign
    pkgs.haskellPackages.servant-oauth2-examples
    pkgs.haskellPackages.servant-to-elm
    pkgs.serverspec
    pkgs.haskellPackages.servant-client-core
    pkgs.haskellPackages.serversession
    pkgs.haskellPackages.servant-queryparam-openapi3
    pkgs.haskellPackages.servant-exceptions-server
    pkgs.haskellPackages.servant-pagination
  ];
}
