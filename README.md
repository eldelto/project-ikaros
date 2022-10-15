
# Table of Contents

1.  [Project Ikaros](#org7b17389)
    1.  [Goals](#org3b1e582)
    2.  [Milestones](#orgc2f027e)
    3.  [Hardware](#org4e8744c)
        1.  [uC](#orga6eb1dc)
        2.  [Accelerometer](#org720afff)
        3.  [Barometer](#org9232229)
    4.  [Software Components](#org97b65d1)
        1.  [Flight Controller](#orgddb7219)
        2.  [Data Viewer](#org552f3e9)
        3.  [Random Data Generator](#org41a5a7b)
        4.  [Serial Data Relay](#orge2de2aa)
        5.  [Data Ingestor](#org9b918e0)
        6.  [Data Store](#org1478f5a)
        7.  [Message Broker](#org7df64ff)


<a id="org7b17389"></a>

# Project Ikaros


<a id="org3b1e582"></a>

## Goals

The main goal of the project is to get familiar with various
hardware concepts while trying to build some sort of
self-stabilizing aerial vehicle (e.g. drone, plane, etc.).


<a id="orgc2f027e"></a>

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


<a id="org4e8744c"></a>

## Hardware

Some thoughts on different hardware options that could be used.


<a id="orga6eb1dc"></a>

### uC


<a id="org720afff"></a>

### Accelerometer


<a id="org9232229"></a>

### Barometer


<a id="org97b65d1"></a>

## Software Components

-   Flight Controller (uC)
-   Data Viewer (web app & server)
-   Random Data Generator (CLI)
-   Serial Data Relay (CLI)
-   Data Ingestor (server)
-   Data Store (database)
-   Message Broker (server)


<a id="orgddb7219"></a>

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


<a id="org552f3e9"></a>

### Data Viewer

The data viewer is a web application that visualises sensor data
(live or stored).

1.  Features

    -   [ ] Displays live data received from the Message Broker via an
        auto-scrolling line graph
    -   [ ] Displays historical data received from its own backend or
        the broker? **TBD**

2.  TODO Return 404 if a template could not be found

3.  TODO Choose a licence


<a id="org41a5a7b"></a>

### Random Data Generator

A small CLI tool that connects to the Message Broker and
submits random data in a specified range.

1.  Features

    -   [ ] Connect to the Message Broker and submmit data
    -   [ ] Submit a sine wave in a specifiable range


<a id="orge2de2aa"></a>

### Serial Data Relay

A CLI tool that reads from the serial port and relays the
incoming data to the Message Broker.

1.  Features

    -   [ ] Read from the serial port and print the data to stdout
    -   [ ] Relay data to the Message Broker on a configurable topic


<a id="org9b918e0"></a>

### Data Ingestor

A server application that connects to the Message Broker, ingests
incoming messages and forwards them to the Data Store for
persistent storage.

1.  Features

    -   [ ] Connect to the Message Broker and receive messages from a
        configurable topic
    -   [ ] Manage the Data Store schema via automatically applied
        migrations
    -   [ ] Persist messages in the Data Store


<a id="org1478f5a"></a>

### Data Store

The persistent storage layer of the project.

1.  Features

    -   [ ] Persist sensor data from different sources
    -   [ ] Add proper indices to speed up data retrieval
    -   [ ] Compress the stored data to save disk space


<a id="org7df64ff"></a>

### Message Broker

A pub/sub message broker that handles message fan out and ties
the different componenets together.

1.  Features

    -   [ ] Handle basic message fan out
    -   [ ] Require authentication for message posting
    -   [ ] Require authentication for message reading

