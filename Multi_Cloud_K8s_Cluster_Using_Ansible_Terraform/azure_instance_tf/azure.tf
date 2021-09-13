provider "azurerm"{
        features{}
        }

resource "azurerm_public_ip" "myterraformpublicip" {
    name                         = "myPublicIP"
    location                     = "eastus"
    resource_group_name          = "buddhi"
    allocation_method            = "Dynamic"

    tags = {
        env = "azureworker2"
    }
}

resource "azurerm_network_security_group" "myterraformnsg" {
    name                = "myNetworkSecurityGroup"
    location            = "eastus"
    resource_group_name = "buddhi"

    security_rule {
        name                       = "SSH"
        priority                   = 1001
        direction                  = "Inbound"
        access                     = "Allow"
        protocol                   = "Tcp"
        source_port_range          = "*"
        destination_port_range     = "22"
        source_address_prefix      = "*"
        destination_address_prefix = "*"
    }

    tags = {
        env = "azureworker2"
    }
}

resource "azurerm_network_interface" "myterraformnic" {
    name                        = "myNIC"
    location                    = "eastus"
    resource_group_name         = "buddhi"

    ip_configuration {
        name                          = "myNicConfiguration"
        subnet_id                     = "/subscriptions/e1a41bb7-ebb9-4056-852a-5eea32128b96/resourceGroups/buddhi/providers/Microsoft.Network/virtualNetworks/buddhi-vnet/subnets/default"
        private_ip_address_allocation = "Dynamic"
        public_ip_address_id          = azurerm_public_ip.myterraformpublicip.id
    }

    tags = {
        env = "azureworker2"
    }
}


# Connect the security group to the network interface
resource "azurerm_network_interface_security_group_association" "example" {
    network_interface_id      = azurerm_network_interface.myterraformnic.id
    network_security_group_id = azurerm_network_security_group.myterraformnsg.id
}




resource "azurerm_linux_virtual_machine" "myterraformvm" {
    name                  = "azurekubeworker2"
    location              = "eastus"
    resource_group_name   = "buddhi"
    network_interface_ids = [azurerm_network_interface.myterraformnic.id]
    size                  = "Standard_B1s"

    os_disk {
        name              = "myOsDisk1"
        caching           = "ReadWrite"
        storage_account_type = "Premium_LRS"
    }

    source_image_reference {
        publisher = "RedHat"
        offer     = "RHEL"
        sku       = "82gen2"
        version   = "latest"
    }
    admin_username = "azureuser"
    disable_password_authentication = true

    admin_ssh_key {
        username       = "azureuser"
        public_key     = file("./master.pub")
    }

    tags = {
        env = "azureworker2"
    }
}
