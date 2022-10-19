
# Table of Contents

1.  [Project Ikaros](#org8a94662)
    1.  [Goals](#org068f61c)
    2.  [Milestones](#org88fd1f3)
    3.  [Hardware](#org9f8ce23)
        1.  [uC](#org0192506)
        2.  [Accelerometer](#orgc0800c2)
        3.  [Barometer](#org89f7486)
    4.  [Software Components](#orga79b87c)
        1.  [Flight Controller](#orgcd51670)
        2.  [Tower](#orgceefcca)
        3.  [Random Data Generator](#org2c08429)
        4.  [Serial Data Relay](#org00a8c2d)
        5.  [Data Store](#orgaa10051)


<a id="org8a94662"></a>

# Project Ikaros


<a id="org068f61c"></a>

## Goals

The main goal of the project is to get familiar with various
hardware concepts while trying to build some sort of
self-stabilizing aerial vehicle (e.g. drone, plane, etc.).


<a id="org88fd1f3"></a>

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


<a id="org9f8ce23"></a>

## Hardware

Some thoughts on different hardware options that could be used.


<a id="org0192506"></a>

### uC


<a id="orgc0800c2"></a>

### Accelerometer


<a id="org89f7486"></a>

### Barometer


<a id="orga79b87c"></a>

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


<a id="orgcd51670"></a>

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


<a id="orgceefcca"></a>

### Tower

For simplicities sake is has been decided to move most backend
logic into a single deployable unit dubbed `Tower`. Refer to the
sub-components for further details.

1.  Data Analyzer

    The data analyzer is a web application that visualises sensor data
    (live or stored).
    
    1.  Features
    
        -   [ ] Displays live data received from the Message Broker via an
            auto-scrolling line graph
        -   [ ] Displays historical data received from its own backend or
            the broker? **TBD**
    
    2.  TODO Return 404 if a template could not be found
    
    3.  TODO Choose a licence

2.  Message Broker

    A pub/sub message broker that handles message fan out and ties
    the different componenets together.
    
    1.  Features
    
        -   [ ] Handle basic message fan out
        -   [ ] Require authentication for message posting
        -   [ ] Require authentication for message reading

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


<a id="org2c08429"></a>

### Random Data Generator

A small CLI tool that connects to the Message Broker and
submits random data in a specified range.

1.  Features

    -   [ ] Connect to the Message Broker and submmit data
    -   [ ] Submit a sine wave in a specifiable range


<a id="org00a8c2d"></a>

### Serial Data Relay

A CLI tool that reads from the serial port and relays the
incoming data to the Message Broker.

1.  Features

    -   [ ] Read from the serial port and print the data to stdout
    -   [ ] Relay data to the Message Broker on a configurable topic


<a id="orgaa10051"></a>

### Data Store

The persistent storage layer of the project.

1.  Features

    -   [ ] Persist sensor data from different sources
    -   [ ] Add proper indices to speed up data retrieval
    -   [ ] Compress the stored data to save disk space

