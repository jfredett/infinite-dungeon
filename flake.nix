{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    devshell.url = "github:numtide/devshell";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs = { self, nixpkgs, devshell, flake-parts, ... } @ inputs:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
        devshell.flakeModule
      ];

      systems = [
        "x86_64-linux"
      ];

      perSystem = { pkgs, system, ... }: let
        deps = with pkgs; rec {
          dev = [
            cloc
            timg
            just
            bc
          ] ++ ci;
          ci = [
          ];
        };
      in {
        packages = {
          ci = pkgs.writeShellApplication {
            name = "ci";
            runtimeInputs = deps.ci;
            text = /* bash */ ''
                            just ci
                            '';
          };


        };
        devshells.default = {
          motd = ''


                     ==================================
                      I N F I N I T E    D U N G E O N
                     ==================================

          '';
          packages = deps.dev;
        };
      };
    };
}
