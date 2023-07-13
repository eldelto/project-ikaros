# Table of Contents

1.  [Project Ikaros](#org9bfe191)
    1.  [Goals](#org8f84d66)
    2.  [Milestones](#orgd1a2004)
    3.  [Getting Started](#orgc228aee)
        1.  [Prerequisites](#org5898dce)
        2.  [Compilation](#org4436a0c)
        3.  [Useful Make Targets](#org9d393f8)
    4.  [Hardware](#org1b31121)
        1.  [uC](#org855b405)
        2.  [Accelerometer](#org877ed4e)
        3.  [Barometer](#org88017d0)
    5.  [Software Components](#org778b74b)
        1.  [Flight Controller](#org4886648)
        2.  [Tower](#org4a253cd)


<a id="org9bfe191"></a>

# Project Ikaros


<a id="org8f84d66"></a>

## Goals

The main goal of the project is to get familiar with various
hardware concepts while trying to build some sort of
self-stabilizing aerial vehicle (e.g. drone, plane, etc.).


<a id="orgd1a2004"></a>

## Milestones

-   [X] Choose hardware (main uC, accelerometer, barometer, motors,
    props)
-   [X] Choose software stack (uC, base station, persistence)
-   [X] Display fake sensor data
-   [X] Display live sensor data
-   [ ] Controll two motors to properly balance a see-saw
-   [ ] Get reliable sensor readings under motor vibrations
-   [ ] Persist sensor data and display historical data
-   **TBD**


<a id="orgc228aee"></a>

## Getting Started

A quick guide to get the project up and running.


<a id="org5898dce"></a>

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
        
            brew install gcc-arm-embedded libusb cmake
    
    3.  Build the pico-sdk project:
        
            cd pico-sdk
            git submodule update --init
    
    4.  Build the picotool project:
        
            cd pico-tool
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


<a id="org4436a0c"></a>

### Compilation

To download all dependencies and initialize the project run `make
     init`. This will download Go dependencies, required npm packages
and some additional tools. Running `make` in the project root
will compile all subprojects and output their binaries to `bin/`.


<a id="org9d393f8"></a>

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
<td class="org-left">make flash-pico</td>
<td class="org-left">Flashes software changes to the Raspberry Pi Pico</td>
</tr>


<tr>
<td class="org-left">make clean</td>
<td class="org-left">Deletes bin/*</td>
</tr>
</tbody>
</table>


<a id="org1b31121"></a>

## Hardware

Some thoughts on different hardware options that could be used.


<a id="org855b405"></a>

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


<a id="org877ed4e"></a>

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


<a id="org88017d0"></a>

### Barometer

**TBD**


<a id="org778b74b"></a>

## Software Components

-   Flight Controller (uC)
-   Tower (GUI app)


<a id="org4886648"></a>

### Flight Controller

The flight controller is the main data source of the system and
submits all available events to the message broker for live
monitoring and after the fact data analysis.

The implementation will initially be done in C but later on I
want to give Forth a try.

1.  Features

    -   [X] Sends sensor data via serial port to the base station
    -   [ ] Runs a simple PID loop to control a single actuator
    -   [ ] Sends sensor data via WIFI to the Message Broker directly
    -   [ ] Controls multiple actuators


<a id="org4a253cd"></a>

### Tower

Tower is a native GUI application to display graph data sent from
the flight controller and in return send some controlling data
back to arm/disarm and tune the PID controllers.

For the actual GUI drawing `raylib` and `raylibgui` are used. The
graphs are drawn by a custom implementation.

