---
title: Process Control Alert & Response System
slug: process-control-alerts
client: Manufacturing Facility
industry: Manufacturing
duration: 4 months
date: 2024-12-10
problem: Equipment failures averaging $45K per incident
outcome: 85% reduction in emergency escalations
thumbnail: /assets/case-studies/process-control-thumb.jpg
heroImage: /assets/case-studies/process-control-hero.jpg
---



## Challenge

An important Liquid Ingredient was arriving by truck from different vendors and was loaded into silos. Routing was informal:

* Drivers entered vendor information in the unloading system.
* Operators then filled silos round robin style, with no disinction between different silos.
* Though traceability was enforced, all silos were treated as justcapacity.

This meant that the customer couldn't control when the ingredient from different vendors was mixed. This meant that the impact radius of a recall would be very high.

## Solution

We added an automated vendor-to-silo quarantine layer around the existing unloading and receiving tools, without disrupting normal habits.

Drivers still used the same program as before. When they save pumpoff information, the system looks up each vendor on the load, determines which silos are allowed, and determines an “allowed silo set”.

Operators still fill silos round robin, but now they only choose from silos that the system has already approved for that specific load.

One or more silos can be marked as mix silos, so loads with no overlap between vendor rules, or with unassigned/unrecognized vendors, are automatically directed into controlled mixed storage instead of being handled ad hoc.

All decisions are made in real time at unloading, so rules are enforced before any Liquid Ingredient moves.

## Technical Implementation

At a functional level:

the unload program captures the list of vendors on the truck, compares them to a maintained set of vendor-to-silo assignments, and determines which silos are valid for that load.

If the vendors on a load share common allowed silos, those silos are used; if they don’t, or if some vendors are not assigned, the system directs the load to the designated mix silos instead.


## Outcome

Quarantine for Liquid Ingredient is now:
* Consistent – the same vendors always map to the same silos, regardless of who is on shift.
* Simple for operators – they still just move from silo to silo in rotation, but only among safe, pre-filtered options.
* Controlled and traceable – special and unassigned cases are handled through explicit mix silos, and routing logic lives in the system instead of in memory or personal notes.