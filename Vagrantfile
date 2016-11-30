# -*- mode: ruby -*-
# vi: set ft=ruby :
# Sample Vagranfile to setup Learning Environment
# for Ansible Playbook Essentials
VAGRANTFILE_API_VERSION = "2"
Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.network :private_network, ip: "192.168.3.10"

  config.vm.hostname = "prerender.dev"

  config.vm.synced_folder ".", "/home/vagrant/Code"

  config.vm.provision "shell", path: "provision.sh"
end
