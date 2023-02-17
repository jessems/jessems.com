---
slug: setting-up-local-environment-now-experience-custom-component-development
date: "2023-02-16"
title: "Setting up your environment for Now Experience / UI Builder custom component development"
description: "In this tutorial you will learn how to set up your local environment for development of custom Now Experience / UI Builder components"
tags: "servicenow"
published: true
category: "technical"
---

Developing custom Now Experience components requires more tooling than conventional ServiceNow development. You'll need to install some software locally onto your Mac, PC or linux computer. Here are the steps you need to take:

## Step 1: Install VS Code

You'll need an IDE (Integrated Development Environment). Microsoft maintains a fantastic and popular open source IDE called VS Code. I recommend downloading and installing it from [here](https://code.visualstudio.com/download).

VS Code also comes with a convenient terminal window. For any of the subsequent instructions where you need to type in a command you can do it from VS Code terminal. If it's not open already you can go on the top menu **Terminal > New Terminal** to open a new terminal window.

## Step 2: Install NVM

- We need to install NVM
- Using NVM we need to install Node.js 14
- We need to set Node.js 14 as our default version

## Step 3. Download and install the ServiceNow CLI.

CLI stands for Command Line Interface and this is simply a tool that let's you interface with a ServiceNow instance through the command line. The official docs tell you to install it from the [ServiceNow Store](https://store.servicenow.com/sn_appstore_store.do#!/store/home), but somehow this was giving me issues. I recommend installing it through npm by typing this into your console:

```shell
npm i -g @servicenow/cli
```

## Step 4. Install the `ui-component` extension using the ServiceNow CLI

This is an extension for the ServiceNow CLI and it allows us to create new UI Components with certain presets as well as shipping them to a ServiceNow instance. After downloading and installing the ServiceNow CLI (SNC for short) you can open a terminal window and type in the following:

```shell
snc extension add --name ui-component
```

This should download and install the `ui-component` extension. Once it's finished you can type the following command to confirm it's installed and functioning correctly.

```shell
snc ui-component --help
```

## Step 5: Install the CLI Metadata application on your instance

1. Visit the ServiceNow Store and search for CLI Metadata. Then enable it for your instances.

![](images/20230217102210.png)

2. On your instance navigate to **System Definitions > Plugins**. You'll be redirected to an overview of All Applications.

3. Here search for CLI Metadata. Select it and install it.

![](images/20230217102441.png)

## Step 6: Set up a named connection profile

The official docs guide you towards creating a default connection profile, but as of this writing this doesn't seem to work. An effective workaround is setting up a _named_ connection profile as follows:

In your command-line tool enter the following to set up a default connection profile:

```shell
snc configure profile set --profile <replace-with-your-profile-name>
```

You'll be prompted for your instance URL and login details.

For testing purposes you can pick Login Method: Basic and Default Output Format: JSON.

### Step 7: Set up the project

To scaffold a project do the following:

```shell
snc ui-component project --profile <your-named-connection-profile> --name @myorg/movie-quotes --description 'A web component that prints movie quotes.'
```

This scaffolds a project and creates a list of dependencies. To install those dependencies type the following in the terminal:

```shell
npm install
```

### Step 8: (Optional) fix issues

In my case running `npm install` threw various errors. Run the following commands to see if they get rid of any errors you might be experiencing.

(Windows only) install windows build tools to make sure you've got the required Python 2.7

```shell
npm install --global --production windows-build-tools
```

(Mac only) older versions of OSX will have Python 2.7 installed. Newer versions will need to install it.

```shell
brew install pyenv
pyenv install 2.7.18
pyenv global 2.7.18
export PATH="${HOME}/.pyenv/shims:${PATH}"
```

(Mac only) if you're running a M1 or M2 Mac then `brew` will probably not work for you. You need to follow [some additional steps](https://stackoverflow.com/questions/64882584/how-to-run-the-homebrew-installer-under-rosetta-2-on-m1-macbook). Then prefix your commands like this:

```shell
arch -x86_64 brew install pyenv
arch -x86_64 pyenv install 2.7.18
arch -x86_64 pyenv global 2.7.18
export PATH="${HOME}/.pyenv/shims:${PATH}"
```

`node-gyp` is a tool that enables the compilation of native add-on modules for Node in multiple platforms. Somewhere in the dependency tree it appears to be included, so we need to make sure it's installed.

```shell
npm install -g node-gyp
```

Node-SASS seems to be a deprecated version of SASS used by the Now Experience framework. Make sure you're running Node 14 and install the legacy version of Node-SASS.

```shell
npm install node-sass@4.14
```

### Step 8: Run the component locally

```shell
snc ui-component develop
```
