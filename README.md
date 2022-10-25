
# Table of Contents

1.  [Project Ikaros](#org3e6990c)
    1.  [Goals](#orga4552a2)
    2.  [Milestones](#orgeaedaa2)
    3.  [Hardware](#org3a2616c)
        1.  [uC](#orgf0317a4)
        2.  [Accelerometer](#org917a9cd)
        3.  [Barometer](#orgd30ed95)
    4.  [Software Components](#orge627112)
        1.  [Flight Controller](#org9cd0352)
        2.  [Tower](#org3e7170b)
        3.  [Random Data Generator](#org7a94c5f)
        4.  [Serial Data Relay](#org51902c8)
        5.  [Data Store](#org934b92c)
    5.  [Implement Websocket endpoints](#org77cbaff)
    6.  [Implement Websocket client](#org34b419b)
    7.  [Implement Websocket data generator](#org56ce960)
    8.  [Implement continuous graph](#org5101aa7)
    9.  [Choose hardware](#org0e2a554)
    10. [Choose a licence](#orga010bd9)
    11. [Return 404 if a template could not be found](#orgdb1c0c6)
    12. [Read gyro data from sensor](#orgdc102be)
    13. [Write sensor data from IC to serial port](#org3b867a2)
    14. [Read serial port data and forward to websocket](#orgd30c12c)
    15. [Compute 3D fusion algorithm on MPU-6050](#org9c9d62f)


<a id="org3e6990c"></a>

# Project Ikaros


<a id="orga4552a2"></a>

## Goals

The main goal of the project is to get familiar with various
hardware concepts while trying to build some sort of
self-stabilizing aerial vehicle (e.g. drone, plane, etc.).


<a id="orgeaedaa2"></a>

## Milestones

-   [ ] Choose hardware (main uC, accelerometer, barometer, motors,
    props)
-   [ ] Choose software stack (uC, base station, persistence)
-   [ ] Display fake sensor data
-   [ ] Display live sensor data
-   [ ] Get reliable sensor readings under motor vibrations
-   [ ] Persist sensor data and display historical data
-   [ ] Build test frame to balance a single motor powered lever
-   [ ] Controll a single motor to properly balance a lever
-   **TBD**


<a id="org3a2616c"></a>

## Hardware

Some thoughts on different hardware options that could be used.


<a id="orgf0317a4"></a>

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


<a id="org917a9cd"></a>

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


<a id="orgd30ed95"></a>

### Barometer


<a id="orge627112"></a>

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


<a id="org9cd0352"></a>

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


<a id="org3e7170b"></a>

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


<a id="org7a94c5f"></a>

### Random Data Generator

A small CLI tool that connects to the Message Broker and
submits random data in a specified range.

1.  Features

    -   [ ] Connect to the Message Broker and submmit data
    -   [ ] Submit a sine wave in a specifiable range


<a id="org51902c8"></a>

### Serial Data Relay

A CLI tool that reads from the serial port and relays the
incoming data to the Message Broker.

1.  Features

    -   [ ] Read from the serial port and print the data to stdout
    -   [ ] Relay data to the Message Broker on a configurable topic


<a id="org934b92c"></a>

### Data Store

The persistent storage layer of the project.

1.  Features

    -   [ ] Persist sensor data from different sources
    -   [ ] Add proper indices to speed up data retrieval
    -   [ ] Compress the stored data to save disk space


<a id="org77cbaff"></a>

## DONE Implement Websocket endpoints


<a id="org34b419b"></a>

## DONE Implement Websocket client


<a id="org56ce960"></a>

## DONE Implement Websocket data generator


<a id="org5101aa7"></a>

## DONE Implement continuous graph


<a id="org0e2a554"></a>

## DONE Choose hardware


<a id="orga010bd9"></a>

## DONE Choose a licence


<a id="orgdb1c0c6"></a>

## TODO Return 404 if a template could not be found


<a id="orgdc102be"></a>

## TODO Read gyro data from sensor


<a id="org3b867a2"></a>

## TODO Write sensor data from IC to serial port


<a id="orgd30c12c"></a>

## TODO Read serial port data and forward to websocket


<a id="org9c9d62f"></a>

## TODO Compute 3D fusion algorithm on MPU-6050
