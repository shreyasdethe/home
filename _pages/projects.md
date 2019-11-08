---
title: "Projects"
permalink: /projects/
author_profile: true
use_math: true
title: "Projects"
excerpt: "Projects"
---


1.  **High Power Density Dual Active Bridge DC-DC Converter** (July '19 - Present) <br/>
    *Guide : [Prof. Anshuman Shukla](https://www.ee.iitb.ac.in/web/people/faculty/home/ashukla), EE Department, IIT Bombay* <br/>
    This project involves designing and building a high power density DC-DC converter based on the Dual Active Bridge topology. We have simulated a 2000 W converter in PLECS, using single phase shift modulation, dual phase shift modulation types 1 and 3. The goal is to study the various parameters of operation critical in determining the components of the circuit, like peak current in the transformer, average load current etc. We are developing the converter on a PCB using high power IGBTs and/or SiC MOSFETs alongwith a high frequency transformer.
    
    
2.  **High Frequency Gate Driver Circuits for SiC MOSFETs** (Summer '19) <br/>
    *[Boson Motors](http://bosonmotors.com), Pune* <br/>
    Since the emergence of SiC MOSFETs, they have been in great demand due to their large power density, low on-state resistance and very small rise and fall times. In this project I designed and built a dual channel isolated gate driver circuit operating at a switching frequency upwards of 100 kHz. Auxiliary circuits for the driver design which includes snubber circuits and short-circuit protection circuits were implemented and verified through simulation. Also, the MOSFET behaviour was tested using the driver circuit under various driving conditions and load.


3.  **Analog front-end receiver development for NavIC** (May '18 - April '19) <br/>
    *Guide : [Prof. Shalabh Gupta](https://www.ee.iitb.ac.in/web/people/faculty/home/shalabh), EE Department, IIT Bombay* <br/>
    Working with a team of three we developed and improved upon an existing analog front-end receiver for the indigenous NavIC satellite system, which comprised of an antenna (center frequency 1176.45 MHz, L5 band), low noise amplifiers followed by SAW filters, and a mixer to downconvert the signal to a frequency which can be easily sampled using a USRP (Universal Software Radio Peripheral). The signal was captured and processed on a computer using MATLAB to extract useful navigation data. We also designed a method to process the data in real-time which involved sending the data in chunks, over a TCP/IP link.


4.  **Multiple Drone Tracking and Localization** (December '17) <br/>
    *[Drona Aviation](https://www.dronaaviation.com/), IIT Bombay* <br/>
    In the project, we localized multiple drones' position using WhyCon ROS package and extracted 3D coordinates of multiple drones in real-time with accuracy upto 3cm. These coordinates were later used in a project to automate drone's flight movement based on its past location. I developed a way to control a swarm of drines using the Master-Slave topology and specific IP addresses provided to individual drones, using the ESP8266 WiFi module.


5.  **Faster computation of correlation of NavIC data** (April '19) <br/>
    *Knowledge Incubation under TEQIP, MHRD, Govt. of India* <br/>
    Working with a team of three, we developed an algorithm for faster correlation of local data received from a NavIC receiver. The method involved moving from the traditional linear search to the circular serach algorithm, which in the frequency domain translates to the fourier transform. Computing FFT (Fast Fourier Transform) is a relatively computationally inexpensive task, hence the overall computation time for correlation reduced by 7000%, in our MATLAB implementation. This faster correlation  time will reduce the cold start time of future NavIC receivers.


6.  **Automated Strawberry Plucker** (December '18) <br/>
    *TCTD Challenge, Techfest 2018, IIT Bombay* <br/>
    The challenge provided by Tata Center for Technology and Design (TCTD) was an open problem, to provide the farmers of India an automated solution that would reduce manual labour. Working in a group of four we designed an automated strawberry plucker, a four wheeled bot that goes over a strawberry plant, rotates its arm around until it sees a strawberry, plucks it using a gripper and places it in a collection basket. Strawberry detection and classification was done using computer vision and *Yolo V3* single-shot object detector, with the Raspberry Pi camera. Controls were implemented using Arduinos, a stepper motor and a multitude of servo motors. 
    
7.  **RISC Microprocessor implementation in VHDL** (July '18 - December '18) <br/>
    *Guide : [Prof. Virendra Singh](https://www.ee.iitb.ac.in/web/people/faculty/home/viren), EE Department, IIT Bombay* <br/>
    Designed the datapath for a multicycle RISC microprocessor for a given Turing-Complete Instruction Set Architecture. Implemented the design in VHDL, simulated and verified its operation. Uploaded the design on a DE0-Nano FPGA board and verified the operation of the microprocessor.
    
8.  **Reading Device using Braille** (Summer '17) <br/>
    *Institute Technical Summer Project, IIT Bombay* <br/>
    We designed and developed a device which provides dynamic tactile Braille-character output aided by electro-mechanical systems under the users finger while receiving input from any document pre-loaded. It uses a Raspberry Pi for processing and output. It was designed to help visually challenged people to read any PDF document using the Braille character system.
