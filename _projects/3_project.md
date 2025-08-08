---
layout: distill
title: verteseg
description: Automatic vertebral body segmentation on IDEAL MRI
img: assets/img/projects/verteseg.png
importance: 1
date: 2020-09-01
category: work
related_publications: false
authors:
  - name: Jiamin Zhou
    affiliations:
      name: UCSF
toc:
  - name: Background
    subsections:
      - name: IDEAL MRI
  - name: Approach
    subsections:
      - name: U-Net
      - name: Training
  - name: Results
    subsections:
      - name: Segmentation Accuracy
      - name: Quantifying BMF
      - name: Workflow Efficienty and Reliability

bibliography: 2020-09-01-distill.bib
---

My first first-author publication is a technical article on using a deep learning pipeline for segmentation of vertebral bodies using quantitative water-fat MRI.

_If you're interested in learning more, here is the [full article](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2020.00612/full)._

## Background

Studies have shown that increased bone marrow fat (BMF) in the vertebral bodies is linked to conditions like osteoporosis, chronic low back pain, intervertebral disc degeneration, and metabolic disorders including HIV and diabetes. These associations suggest that BMF could serve as an early biomarker for disease, offering clues about bone strength, inflammation, or metabolic shifts before more obvious symptoms or structural changes appear.

While BMF has clinical relevance, measuring it accurately isn’t straightforward. Conventional MRI sequences like T1- and T2-weighted imaging can give a general sense of fat content based on tissue brightness, but these methods are subjective and not reliable for longitudinal tracking or large-scale studies. A more precise approach is needed to quantify fat content objectively and reproducibly.

### IDEAL MRI

IDEAL MRI (Iterative Decomposition of water and fat with Echo Asymmetry and Least-squares estimation) is an MRI technique that builds on Dixon imaging principles, separating water and fat signals in each voxel to create detailed fat-fraction maps<d-cite key="reeder2005iterative"></d-cite>. It provides accurate and consistent measurements of BMF across patients and scan sessions. However, despite its technical strengths, IDEAL MRI still relies on a time-consuming step: manually outlining vertebral bodies to extract regional fat data. This manual segmentation limits scalability and hinders adoption in routine workflows.

## Approach

### U-Net

To streamline the segmentation process, we turned to deep learning. Specifically, we used a U-Net convolutional neural network, which has become a standard tool for medical image segmentation<d-cite key="ronneberger2015u"></d-cite>. U-Net’s architecture includes two paths: a contracting path that captures image features at different scales, and an expanding path that reconstructs spatial detail. It uses skip connections to preserve fine anatomical features while benefiting from deep pattern recognition. This allows the network to learn how to identify and segment vertebral bodies in MRI scans, even when image contrast varies.

### Training

Manual segmentations of the lumbar vertebral bodies from L1-L5 were first created on IDEAL MRI to serve as training data for the U-Net. Of 57 total subjects segmented, 31 were used to train the model, while the rest were held out for validation. The goal was for the network to learn to automatically produce vertebral masks from new, unseen scans without needing further human input.

Once the U-Net model segmented the vertebral bodies, those masks were applied to the IDEAL fat-fraction maps. This allowed the pipeline to calculate BMF for each vertebral body based entirely on the automated output. In effect, the process became fully automated: starting with raw MRI images and ending with precise fat measurements, all without manual intervention at the point of use.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/verteseg-pipeline.jpg" title="verteseg pipeline" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Automatic vertebral body segmentation and fat quantification pipeline. <strong>(A)</strong> All IDEAL images (water, fat, fat fraction, and R*) are fed into a U-Net (13) as multichannel inputs, resulting in the predicted segmentation map. <strong>(B)</strong> DICOM masks were made from the predicted segmentation map. The mean BMFs from  automatically segmented ROIs were compared with those of the manually segmented ROIs through Bland-Altman analysis.
</div>

## Results

Code can be found [online](https://github.com/zhoji/verteseg).

### Segmentation Accuracy

The U-Net performed well on unseen data. In testing, the model achieved an area under the ROC curve (AUC) of approximately 0.92, with a Dice similarity coefficient around 0.85, indicating strong overlap between the automated and manual vertebral masks. Sensitivity was very high (~0.99), meaning the model rarely missed vertebral regions. Specificity was slightly lower (~0.80), reflecting some inclusion of nearby tissue, but within acceptable bounds for clinical applications.

### Quantifying BMF

When comparing BMF values calculated by the automated segmentations to those obtained through manual segmentation, the differences were minimal. The average bias was about 0.6%, and the limits of agreement were within ±3.3%. This level of concordance suggests the automated system can reliably replicate expert-level measurement precision.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/verteseg-bland-altman.jpg" title="verteseg stats" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Bland-Altman plots of mean BMF (%) as determined by manual segmentation compared to automatic segmentation by Annotator <strong>(A)</strong> and <strong>(B)</strong>. The biases between BMFs collected by the automated (NN) and manual segmentations for both test sets were less than 10% of the mean value.
</div>

### Workflow Efficienty and Reliability

Manual segmentation of the vertebrae took about 5 minutes per scan. The U-Net model completed the same task in roughly 16 seconds, which is a 92-fold improvement in speed. This efficiency could make BMF quantification feasible in settings where time and labor are limited, such as large research cohorts or busy clinical practices.

The model also demonstrated excellent repeatability. In test-retest scans, the precision error was just 1.6%, and the intraclass correlation coefficient (ICC) was a perfect 1.00. This means that repeated measurements on the same subject were virtually identical, an essential requirement for tracking changes over time.

By combining the accuracy of IDEAL MRI with the efficiency of deep learning–based segmentation, we presented a practical and scalable solution for bone marrow fat quantification. This opens the door for BMF to be used more widely, not just in specialized research studies, but potentially in routine imaging for patients with back pain, metabolic disorders, or bone health concerns.
