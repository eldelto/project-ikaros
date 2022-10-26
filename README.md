
# Table of Contents

1.  [Project Ikaros](#org235d507)
    1.  [Goals](#org53c7828)
    2.  [Milestones](#orgee8ecf2)
    3.  [Hardware](#orgf95a137)
        1.  [uC](#orgeca5229)
        2.  [Accelerometer](#org54a16d7)
        3.  [Barometer](#orgf102a73)
    4.  [Software Components](#orgea57c3b)
        1.  [Flight Controller](#orgbc5e8ec)
        2.  [Tower](#org20445c7)
        3.  [Random Data Generator](#orgb078b4b)
        4.  [Serial Data Relay](#orgf6f02d6)
        5.  [Data Store](#orgc8fc273)
        6.  [CSM - Comma Separated Map](#orga1a170d)
    5.  [Implement Websocket endpoints](#orgdfbad40)
    6.  [Implement Websocket client](#orga39a799)
    7.  [Implement Websocket data generator](#org8494bab)
    8.  [Implement continuous graph](#org543c83e)
    9.  [Choose hardware](#org1ff0f7a)
    10. [Choose a licence](#org92ada19)
    11. [Read serial port data and forward to websocket](#org0f44f85)
    12. [Return 404 if a template could not be found](#org80a5d61)
    13. [Read gyro data from sensor](#org08b27ad)
    14. [Write sensor data from IC to serial port](#org2c233fb)
    15. [Compute 3D fusion algorithm on MPU-6050](#orgecb943a)


<a id="org235d507"></a>

# Project Ikaros


<a id="org53c7828"></a>

## Goals

The main goal of the project is to get familiar with various
hardware concepts while trying to build some sort of
self-stabilizing aerial vehicle (e.g. drone, plane, etc.).


<a id="orgee8ecf2"></a>

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


<a id="orgf95a137"></a>

## Hardware

Some thoughts on different hardware options that could be used.


<a id="orgeca5229"></a>

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


<a id="org54a16d7"></a>

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


<a id="orgf102a73"></a>

### Barometer


<a id="orgea57c3b"></a>

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


<a id="orgbc5e8ec"></a>

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


<a id="org20445c7"></a>

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


<a id="orgb078b4b"></a>

### Random Data Generator

A small CLI tool that connects to the Message Broker and
submits random data in a specified range.

1.  Features

    -   [ ] Connect to the Message Broker and submmit data
    -   [ ] Submit a sine wave in a specifiable range


<a id="orgf6f02d6"></a>

### Serial Data Relay

A CLI tool that reads from the serial port and relays the
incoming data to the Message Broker.

1.  Features

    -   [ ] Read from the serial port and print the data to stdout
    -   [ ] Relay data to the Message Broker on a configurable topic


<a id="orgc8fc273"></a>

### Data Store

The persistent storage layer of the project.

1.  Features

    -   [ ] Persist sensor data from different sources
    -   [ ] Add proper indices to speed up data retrieval
    -   [ ] Compress the stored data to save disk space


<a id="orga1a170d"></a>

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


<a id="orgdfbad40"></a>

## DONE Implement Websocket endpoints


<a id="orga39a799"></a>

## DONE Implement Websocket client


<a id="org8494bab"></a>

## DONE Implement Websocket data generator


<a id="org543c83e"></a>

## DONE Implement continuous graph


<a id="org1ff0f7a"></a>

## DONE Choose hardware


<a id="org92ada19"></a>

## DONE Choose a licence


<a id="org0f44f85"></a>

## DONE Read serial port data and forward to websocket


<a id="org80a5d61"></a>

## TODO Return 404 if a template could not be found


<a id="org08b27ad"></a>

## TODO Read gyro data from sensor


<a id="org2c233fb"></a>

## TODO Write sensor data from IC to serial port


<a id="orgecb943a"></a>

## TODO Compute 3D fusion algorithm on MPU-6050

