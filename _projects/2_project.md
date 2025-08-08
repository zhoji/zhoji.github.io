---
layout: distill
title: PDN Experimental Project
description: Modelling calcium feedback mechanisms in light adaptation in vertebrate cone photoreceptors
img: assets/img/projects/photocurrent.png
importance: 3
date: 2018-04-25
category: school
related_publications: false
authors:
  - name: Jiamin Zhou
    affiliations:
      name: University of Cambridge
toc:
  - name: Background
    subsections:
      - name: Phototransduction at Rest
      - name: Activation of the Photoresponse
      - name: Termination of the Photoresponse
      - name: Light Adaptation
  - name: Approach
    subsections:
      - name: Adapting a Rod Framework
bibliography: 2018-04-25-distill.bib
---

For my final year of undergraduate studies at Cambridge, I did an Experimental Project with [Dr. Hugh Matthews](https://www.pdn.cam.ac.uk/directory/hugh-matthews) in the Physiology, Development, and Neuroscience (PDN) Department on mathematical modelling of photocurrent in cone photoreceptors. Revealing how cones adapt to bright light illuminates the basis of daytime vision and informs the design of artificial photoreceptors and vision therapies. Although comprehensive models have been developed to describe rod phototransduction and adaptation under scotopic (low-light) conditions, these frameworks typically fail to account for the rapid gain adjustments and accelerated recovery kinetics characteristic of cones operating in the photopic (bright-light) region. Bridging this gap requires a minimal yet physiologically grounded model that incorporates cone-specific parameters and feedback loops.

_If you're interested in learning more, [contact me](mailto:jiamin.zhou@ucsf.edu) for the full dissertation._

## Background

In vertebrates, vision relies on photoreceptors, known as rods and cones, to detect light across varying intensities. Visual sensory information in the form of light is converted into electrical signals in a process known as phototransduction, consisting of a G protein-coupled signalling cascade<d-cite key="fain2001adapt"></d-cite>.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/phototransduction.png" title="phototransduction" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Diagramatic representation of the main processes in the phototransduction cascade. Processes in the light response are shown with <strong>solid</strong> black arrows, while those associated with termination of the light response and restoration of the circulating current are shown with <u>dashed</u> black arrows. Possible modulatory roles of calcium as an inhibitor (<span style="color: #ff0000">red</span> lines) and activator (<span style="color: #228B22">green</span> arrow) are also shown.
</div>

### Phototransduction at Rest

In darkness, photoreceptors maintain a steady, or “dark,” current driven by continuous production of cyclic guanosine monophosphate (cGMP). Constitutively active guanylyl cyclase (GC) produces cGMP, which binds to cyclic nucleotide-gated (CNG) channels. Open CNG channels permit influx of Na⁺ and Ca²⁺, generating a depolarizing inward current. Calcium entering through these channels represents a fraction of the total dark current; it is extruded in exchange for Na⁺ and K⁺ by the Na⁺/Ca²⁺-K⁺ exchanger (NCKX), thus balancing intracellular Ca²⁺ levels and setting the photoreceptor’s resting operating point.

### Activation of the Photoresponse

When photons of appropriate wavelength isomerize the chromophore in the visual pigment (VP), the opsin-bound pigment undergoes a conformational change to its active state (VP\*). VP\* acts as a G-protein-coupled receptor, binding transducin (T) and catalyzing the exchange of GDP for GTP on its α-subunit. The resulting Tα·GTP complex (T\*) activates phosphodiesterase (PDE), which hydrolyzes cGMP. As cGMP concentration falls, CNG channels close, reducing the dark current and hyperpolarizing the cell.

### Termination of the Photoresponse

To restore the dark-adapted condition, VP\* and PDE\* must be inactivated<d-cite key="lyubarsky1996kinetic"></d-cite>. VP\* is phosphorylated by a specific GPCR kinase (VP\*K), a process accelerated when intracellular Ca²⁺ declines; subsequent binding of arrestin fully quenches the pigment’s activity<d-cite key="xu1997arrestin"></d-cite>. Simultaneously, transducin’s Tα·GTP hydrolyzes GTP to GDP, a reaction accelerated by GTPase-activating proteins (GAPs), thereby inactivating PDE<d-cite key="angleson1993gtp"></d-cite>. As cGMP hydrolysis slows and GC resumes unopposed synthesis, cGMP concentration recovers, CNG channels reopen, and the dark current is reinstated.

### Light Adaptation

Cones, which operate in bright light, must prevent saturation at increasing ambient light levels through a process called light adaptation. Light adaptation involves reduced response amplitude (lowering sensitivity) and faster kinetics (speeding up recovery). The amplitude reduction manifests as a smaller change in circulating current relative to the dark current; accelerated kinetics appear as a shortened time-to-peak and onset of recovery following a flash.

<div class="row justify-content-center">
    <div class="col-md-6 col-sm-8">
        {% include figure.liquid loading="eager" path="assets/img/projects/light-adaptation.png" title="light adaptation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Characteristics of light adaptation<d-cite key="pugh1999adapt"></d-cite>. Normalized dim flash responses in salamander rods are plotted over time, with a flash of light delivered around 0.75s, in increasing background light illumination. The top trace was recorded in dark-adapted rods, with each underlying trace obtained with progressively brighter background light intensities.
</div>

Calcium has been shown to be central in this process. During illumination, Ca²⁺ influx through residual open CNG channels decreases, while extrusion via NCKX continues, leading to a fall in intracellular Ca²⁺. This decline triggers three feedback pathways:

1. **GCAP-Mediated GC Activation:** Lower Ca²⁺ relieves inhibition of GC-activating proteins (GCAP1 and GCAP2), boosting GC activity to replenish cGMP more rapidly<d-cite key="wen2014gcap"></d-cite>.

2. **Modulation of CNG Channel Affinity:** Ca²⁺-bound calmodulin (in rods) or CNG-modulin (in cones) alters channel cGMP affinity, decreasing sensitivity; this effect is modest in rods but may be amplified in cones<d-cite key="rebrik2012cng"></d-cite>.

3. **Recoverin-Controlled VP Quenching:** At high Ca²⁺, recoverin binds VPK, inhibiting pigment phosphorylation; falling Ca²⁺ releases recoverin, enhancing VPK activity, accelerating pigment inactivation, and shortening the light response<d-cite key="ames2006recoverin"></d-cite>.

Collectively, these Ca²⁺-dependent loops reduce gain and accelerate recovery, expanding the dynamic range of photoreceptors to detect incremental light changes even under bright illumination.

## Approach

### Adaptating a Rod Framework

We began with a streamlined rod phototransduction model<d-cite key="hamer2005rod"></d-cite>, which mathematically describes cGMP synthesis and hydrolysis coupled to GC feedback using the following ordinary differential equations (ODEs):

$$\frac{d[cGMP]}{dt} = V_{GC}-V_{PDE}$$

$$\frac{d[Ca]}{dt} = J^{in}_{Ca}-J^{in}_{Ca}-\frac{d[Ca\cdot{B}]}{dt}$$

Stay tuned for more (this was lengthier than I remembered)
