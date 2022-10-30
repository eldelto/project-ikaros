
# Table of Contents

1.  [Project Ikaros](#org96fb5bb)
    1.  [Goals](#orgbf5f32e)
    2.  [Milestones](#org2829b0a)
    3.  [Getting Started](#org2c3bf2e)
        1.  [Prerequisites](#orgc9b9a5f)
        2.  [Compilation](#org322e8c2)
        3.  [Useful Make Targets](#orgbbac281)
    4.  [Hardware](#orgaca2fb3)
        1.  [uC](#org6b59361)
        2.  [Accelerometer](#org56d4250)
        3.  [Barometer](#org83cf96b)
    5.  [Software Components](#org6ae746d)
        1.  [Flight Controller](#org3a7d042)
        2.  [Tower](#org702c375)
        3.  [Random Data Generator](#org5ea4cc1)
        4.  [Serial Data Relay](#org7688c2e)
        5.  [Data Store](#org7466cd4)
        6.  [CSM - Comma Separated Map](#org4ba559c)
    6.  [Implement Websocket endpoints](#orgaa70d50)
    7.  [Implement Websocket client](#orgb0f70ad)
    8.  [Implement Websocket data generator](#org55fe788)
    9.  [Implement continuous graph](#orgccefebf)
    10. [Choose hardware](#org96aa391)
    11. [Choose a licence](#org062094b)
    12. [Read serial port data and forward to websocket](#org62f5f0e)
    13. [Return 404 if a template could not be found](#org8017e5a)
    14. [Read gyro data from sensor](#org696e236)
    15. [Write sensor data from IC to serial port](#org7be564b)
    16. [Compute 3D fusion algorithm on MPU-6050](#org0a3e1cf)


<a id="org96fb5bb"></a>

# Project Ikaros


<a id="orgbf5f32e"></a>

## Goals

The main goal of the project is to get familiar with various
hardware concepts while trying to build some sort of
self-stabilizing aerial vehicle (e.g. drone, plane, etc.).


<a id="org2829b0a"></a>

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


<a id="org2c3bf2e"></a>

## Getting Started

A quick guide to get the project up and running.


<a id="orgc9b9a5f"></a>

### Prerequisites

The following software packages need to be installed to
successfully compile the project:

-   [NodeJS](https://nodejs.org/en/download/) >= v18
-   [Go](https://go.dev/doc/install) >= 1.19
-   Make (should come preinstalled on most UNIX systems)


<a id="org322e8c2"></a>

### Compilation

To download all dependencies and initialize the project run `make
     init`. This will download Go dependencies, required npm packages
and some additional tools. Running `make` in the project root
will compile all subprojects and output their binaries to `bin/`.


<a id="orgbbac281"></a>

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
<td class="org-left">make clean</td>
<td class="org-left">Deletes bin/*</td>
</tr>
</tbody>
</table>


<a id="orgaca2fb3"></a>

## Hardware

Some thoughts on different hardware options that could be used.


<a id="org6b59361"></a>

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


<a id="org56d4250"></a>

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


<a id="org83cf96b"></a>

### Barometer


<a id="org6ae746d"></a>

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


<a id="org3a7d042"></a>

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


<a id="org702c375"></a>

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


<a id="org5ea4cc1"></a>

### Random Data Generator

A small CLI tool that connects to the Message Broker and
submits random data in a specified range.

1.  Features

    -   [ ] Connect to the Message Broker and submmit data
    -   [ ] Submit a sine wave in a specifiable range


<a id="org7688c2e"></a>

### Serial Data Relay

A CLI tool that reads from the serial port and relays the
incoming data to the Message Broker.

1.  Features

    -   [ ] Read from the serial port and print the data to stdout
    -   [ ] Relay data to the Message Broker on a configurable topic


<a id="org7466cd4"></a>

### Data Store

The persistent storage layer of the project.

1.  Features

    -   [ ] Persist sensor data from different sources
    -   [ ] Add proper indices to speed up data retrieval
    -   [ ] Compress the stored data to save disk space


<a id="org4ba559c"></a>

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


<a id="orgaa70d50"></a>

## DONE Implement Websocket endpoints


<a id="orgb0f70ad"></a>

## DONE Implement Websocket client


<a id="org55fe788"></a>

## DONE Implement Websocket data generator


<a id="orgccefebf"></a>

## DONE Implement continuous graph


<a id="org96aa391"></a>

## DONE Choose hardware


<a id="org062094b"></a>

## DONE Choose a licence


<a id="org62f5f0e"></a>

## DONE Read serial port data and forward to websocket


<a id="org8017e5a"></a>

## TODO Return 404 if a template could not be found


<a id="org696e236"></a>

## TODO Read gyro data from sensor


<a id="org7be564b"></a>

## TODO Write sensor data from IC to serial port


<a id="org0a3e1cf"></a>

## TODO Compute 3D fusion algorithm on MPU-6050

