
# Table of Contents

1.  [Project Ikaros](#org95942c2)
    1.  [Goals](#org4879789)
    2.  [Milestones](#org99fdbdc)
    3.  [Getting Started](#org708160c)
        1.  [Prerequisites](#org0dc640d)
        2.  [Compilation](#org4bf9721)
        3.  [Useful Make Targets](#orga968f14)
    4.  [Hardware](#org26516b4)
        1.  [uC](#orgf5222ed)
        2.  [Accelerometer](#org042198a)
        3.  [Barometer](#orge1e1036)
    5.  [Software Components](#org32aa799)
        1.  [Flight Controller](#orga92523b)
        2.  [Tower](#org74973d0)
        3.  [Random Data Generator](#org1bce8af)
        4.  [Serial Data Relay](#org3e3d280)
        5.  [Data Store](#orge522247)
        6.  [CSM - Comma Separated Map](#org132c3b8)


<a id="org95942c2"></a>

# Project Ikaros


<a id="org4879789"></a>

## Goals

The main goal of the project is to get familiar with various
hardware concepts while trying to build some sort of
self-stabilizing aerial vehicle (e.g. drone, plane, etc.).


<a id="org99fdbdc"></a>

## Milestones

-   [X] Choose hardware (main uC, accelerometer, barometer, motors,
    props)
-   [X] Choose software stack (uC, base station, persistence)
-   [X] Display fake sensor data
-   [ ] Display live sensor data
-   [ ] Get reliable sensor readings under motor vibrations
-   [ ] Persist sensor data and display historical data
-   [ ] Build test frame to balance a single motor powered lever
-   [ ] Controll a single motor to properly balance a lever
-   **TBD**


<a id="org708160c"></a>

## Getting Started

A quick guide to get the project up and running.


<a id="org0dc640d"></a>

### Prerequisites

The following software packages need to be installed to
successfully compile the project:

-   [NodeJS](https://nodejs.org/en/download/) >= v18
-   [Go](https://go.dev/doc/install) >= 1.19
-   Make (should come preinstalled on most UNIX systems)

All previously mentioned packaged are usually available via the
inbuilt package manager of the OS. The Raspberry Pi Pico SDK on
the other hand needs some special setup that is described in the
next section.

1.  Pico SDK & picotool

    The Raspberry Pi Foundation provides a rather extensive set of
    libraries that provide ready to use functions for most common
    features of the platform and abstracts the concrete hardware of
    the used RP2040 board (e.g. Pico vs. Pico W) so it will work
    with all of them with minimal changes. This project makes use of
    the Pico SDK and therefore an initial setup is required.
    
    1.  Clone the pico-sdk & picotool repositories into a folder
        named `pico` into your work directory that sits on the same
        level as this project's root directory:
        
            mkdir pico
            cd pico
            git clone git@github.com:raspberrypi/pico-sdk.git
            git clone git@github.com:raspberrypi/picotool.git
        
        This should result in the following hierarchy:
        
            <work-dir>
            - project-ikarus
            - pico
              - pico-sdk
              - picotool
    
    2.  Install all required dependencies for pico-sdk &
        picotool. The following commands only apply to macOS using
        brew:
        
            brew install gcc-arm-embedded libusb cmake pkg-config
    
    3.  Build the pico-sdk project:
        
            cd pico-sdk
            git submodule update --init
    
    4.  Build the picotool project:
        
            cd picotool
            mkdir build
            cd build
            export PICO_SDK_PATH=../../pico-sdk
            cmake ..
            make
        
        Also make sure to add the `picotool` executable to your
        path.
    
    5.  To enable hands off flashing of your Raspberry Pi Pico you
        need to flash it once manually with any program thas has
        `stdio_usb` support enabled. After that all subsequent
        updates can be applied with `make flash-pico`.


<a id="org4bf9721"></a>

### Compilation

To download all dependencies and initialize the project run `make
     init`. This will download Go dependencies, required npm packages
and some additional tools. Running `make` in the project root
will compile all subprojects and output their binaries to `bin/`.


<a id="orga968f14"></a>

### Useful Make Targets

A short reference on the most used make targets:

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Target</th>
<th scope="col" class="org-left">Description</th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">make init</td>
<td class="org-left">Download dependencies and tools</td>
</tr>


<tr>
<td class="org-left">make</td>
<td class="org-left">Compile all subprojects</td>
</tr>


<tr>
<td class="org-left">make run</td>
<td class="org-left">Runs the tower backend</td>
</tr>


<tr>
<td class="org-left">make test</td>
<td class="org-left">Runs tests for all subprojects</td>
</tr>


<tr>
<td class="org-left">make run-loop</td>
<td class="org-left">Runs the tower backend and restarts it on file changes</td>
</tr>


<tr>
<td class="org-left">make test-loop</td>
<td class="org-left">Runs tests for all subprojects and reruns them on file changes</td>
</tr>


<tr>
<td class="org-left">make flash-pico</td>
<td class="org-left">Flashes software changes to the Raspberry Pi Pico</td>
</tr>


<tr>
<td class="org-left">make clean</td>
<td class="org-left">Deletes bin/*</td>
</tr>
</tbody>
</table>


<a id="org26516b4"></a>

## Hardware

Some thoughts on different hardware options that could be used.


<a id="orgf5222ed"></a>

### uC

Possible microcontrollers to execute the control loop on.

1.  Raspberry Pi RP2040

    The [RP2040](https://www.raspberrypi.com/products/rp2040/) is an ARM Cortex MO+ based processor with two cores
    and plenty of other features.
    
    The documentation is pretty great and it ships with a dedicated
    C/C++ SDK including a CLI tool to upload new firmware which
    makes integration with the existing project quite easy. It also
    has a whopping 16 PWM channels and 8 PIO state machines which
    are a quite unique feature and for sure interesting to play
    around. There are different breakout boards available (even one
    with WIFI which could be interesting). Price wise those breakout
    boards are also a lot cheaper than for example competing
    Adafruit projects. Costing only around 5 € (or 8 € with WIFI).


<a id="org042198a"></a>

### Accelerometer

Possible accelerometer sensors.

1.  Invensense MPU-6050

    The [MPU-6050](https://invensense.tdk.com/products/motion-tracking/6-axis/mpu-6050/) is a 6-axis gyro/accelerometer combi chip that also
    features a basic temperature sensor. It can be addressed via SPI
    or I2C.
    
    Invensense states that this chip is already obsolete and
    shouldn't be used for new projects but it still looks like a
    good choice, is widely available and pretty cheap (breakout
    boards go for under 10 €). A big plus is the built in digital
    motion processor (DMP) which basically is a small chip that can
    calculate motion fusion algorithms on the sensor itself, freeing
    up resources on the main uC.


<a id="orge1e1036"></a>

### Barometer

**TBD**


<a id="org32aa799"></a>

## Software Components

-   Flight Controller (uC)
-   Data Analyzer (web app)
-   Tower (server)
    -   Data Analyzer
    -   Message Broker
    -   Data Ingestor
-   Data Store (database)
-   Random Data Generator (CLI)
-   Serial Data Relay (CLI)


<a id="orga92523b"></a>

### Flight Controller

The flight controller is the main data source of the system and
submits all available events to the message broker for live
monitoring and after the fact data analysis.

The implementation will initially be done in C but later on I
want to give Forth a try.

1.  Features

    -   [ ] Sends sensor data via serial port to the base station
    -   [ ] Runs a simple PID loop to control a single actuator
    -   [ ] Sends sensor data via WIFI to the Message Broker directly
    -   [ ] Controls multiple actuators


<a id="org74973d0"></a>

### Tower

For simplicities sake is has been decided to move most backend
logic into a single deployable unit dubbed `Tower`. Refer to the
sub-components for further details.

1.  Data Analyzer

    The data analyzer is a web application that visualizes sensor data
    (live or stored).
    
    1.  Features
    
        -   [ ] Displays live data received from the Message Broker via an
            auto-scrolling line graph
        -   [ ] Displays historical data received from its own backend or
            the broker? **TBD**

2.  Message Broker

    A pub/sub message broker that handles message fan out and ties
    the different componenets together.
    
    1.  Features
    
        -   [ ] Handle basic message fan out
        -   [ ] Require authentication for message posting
        -   [ ] Require authentication for message reading
    
    2.  Protocol
    
        What kind of actions need to be supported?
        
        -   Publish data
        -   Receive data
        -   Authenticating as producer (microcontroller) or consumer
            (web-app)

3.  Data Ingestor

    A server application that connects to the Message Broker, ingests
    incoming messages and forwards them to the Data Store for
    persistent storage.
    
    1.  Features
    
        -   [ ] Connect to the Message Broker and receive messages from a
            configurable topic
        -   [ ] Manage the Data Store schema via automatically applied
            migrations
        -   [ ] Persist messages in the Data Store


<a id="org1bce8af"></a>

### Random Data Generator

A small CLI tool that connects to the Message Broker and
submits random data in a specified range.

1.  Features

    -   [ ] Connect to the Message Broker and submmit data
    -   [ ] Submit a sine wave in a specifiable range


<a id="org3e3d280"></a>

### Serial Data Relay

A CLI tool that reads from the serial port and relays the
incoming data to the Message Broker.

1.  Features

    -   [ ] Read from the serial port and print the data to stdout
    -   [ ] Relay data to the Message Broker on a configurable topic


<a id="orge522247"></a>

### Data Store

The persistent storage layer of the project.

1.  Features

    -   [ ] Persist sensor data from different sources
    -   [ ] Add proper indices to speed up data retrieval
    -   [ ] Compress the stored data to save disk space


<a id="org132c3b8"></a>

### CSM - Comma Separated Map

CSM is a minimalistic data exchange format that allows to
transmit key/value pairs.

This exchange format is motivated by the need to transmit
key/value data without needing a full JSON parser running on an
embedded device. Therefore the main goal is ease of parsing and
resource efficient serialization/deserialization.

1.  Specification

    Messages are treated as UTF-8 encoded strings. Each key has to
    be parsed as a string as are the values. Conversion to different
    value types are up to the consuming client. Keys and values are
    separated by `=` whereas each pair is seperated by a single
    `;`. The end of the messages is signalled by a line feed
    character (`\n`).
    
    A simple example:
    
        type=sensorData;gyro=123;accel=456\n
    
    A parser can then transform this input into the following map
    (depicted as JSON):
    
        {
            "type": "sensorData",
            "gyro": "123",
            "accel": "456"
        }
