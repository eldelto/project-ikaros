
# Table of Contents

- [Table of Contents](#table-of-contents)
- [Project Ikaros](#project-ikaros)
  - [Goals](#goals)
  - [Milestones](#milestones)
  - [Hardware](#hardware)
    - [uC](#uc)
    - [Accelerometer](#accelerometer)
    - [Barometer](#barometer)
  - [Software Components](#software-components)
    - [Flight Controller](#flight-controller)
    - [Tower](#tower)
    - [Random Data Generator](#random-data-generator)
    - [Serial Data Relay](#serial-data-relay)
    - [Data Store](#data-store)
  - [DONE Implement Websocket endpoints](#done-implement-websocket-endpoints)
  - [DONE Implement Websocket client](#done-implement-websocket-client)
  - [DONE Implement Websocket data generator](#done-implement-websocket-data-generator)
  - [DONE Implement continuous graph](#done-implement-continuous-graph)
  - [TODO Choose a licence](#todo-choose-a-licence)
  - [TODO Return 404 if a template could not be found](#todo-return-404-if-a-template-could-not-be-found)
  - [TODO Read accelerometer / gyro data](#todo-read-accelerometer--gyro-data)
  - [TODO Write sensor data from IC to serial port](#todo-write-sensor-data-from-ic-to-serial-port)
  - [TODO Read serial port data and forward to websocket](#todo-read-serial-port-data-and-forward-to-websocket)


<a id="org3629bde"></a>

# Project Ikaros


<a id="org238d6ad"></a>

## Goals

The main goal of the project is to get familiar with various
hardware concepts while trying to build some sort of
self-stabilizing aerial vehicle (e.g. drone, plane, etc.).


<a id="org69896d0"></a>

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


<a id="org68e4208"></a>

## Hardware

Some thoughts on different hardware options that could be used.


<a id="org0eb35f5"></a>

### uC


<a id="org348517b"></a>

### Accelerometer


<a id="org619115a"></a>

### Barometer


<a id="org015d7ce"></a>

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


<a id="org348cd15"></a>

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


<a id="orgfd5c096"></a>

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


<a id="org7161860"></a>

### Random Data Generator

A small CLI tool that connects to the Message Broker and
submits random data in a specified range.

1.  Features

    -   [ ] Connect to the Message Broker and submmit data
    -   [ ] Submit a sine wave in a specifiable range


<a id="org69c9a16"></a>

### Serial Data Relay

A CLI tool that reads from the serial port and relays the
incoming data to the Message Broker.

1.  Features

    -   [ ] Read from the serial port and print the data to stdout
    -   [ ] Relay data to the Message Broker on a configurable topic


<a id="orgbf43ca8"></a>

### Data Store

The persistent storage layer of the project.

1.  Features

    -   [ ] Persist sensor data from different sources
    -   [ ] Add proper indices to speed up data retrieval
    -   [ ] Compress the stored data to save disk space


<a id="orgda5c0a7"></a>

## DONE Implement Websocket endpoints


<a id="org53607f8"></a>

## DONE Implement Websocket client


<a id="orgf4c030d"></a>

## DONE Implement Websocket data generator


<a id="orge1ccc9f"></a>

## DONE Implement continuous graph


<a id="org2e26676"></a>

## TODO Choose a licence


<a id="org2818276"></a>

## TODO Return 404 if a template could not be found


<a id="org5a71498"></a>

## TODO Read accelerometer / gyro data


<a id="org3217ba5"></a>

## TODO Write sensor data from IC to serial port


<a id="org8acbcea"></a>

## TODO Read serial port data and forward to websocket

