---
title: "`Spectrome-AI`: a Neural Network Framework for Inferring MEG Spectra"
excerpt: "A brief walkthrough of my Master's thesis where I trained a fully connected neural network on simulated MEG data for graph model parameter estimation.<br><br><img src='/images/mcmc_animated-small.gif'>"
collection: portfolio
---

Under construction!

Abstract
----
Computational modeling is a tool that allows for biological systems involving large networks to be studied, such as in studying the correlations between structural connectivity and functional connectivity in the human brain. Raj et al. proposed the spectral graph model in 2019 as a linear, low-dimensional alternative to conventional neural field and mass models that are more computationally expensive, especially when optimizing parameters, which is necessary in order to obtain quantitative and qualitative information about functional neural activity. The initial method used for inferring the spectral graph model parameters was Markov chain Monte Carlo (MCMC) sampling, which provided a robust way to estimate what the target parameter distributions were most likely to be. However, MCMC methods are still slow and computationally expensive. In this study, we trained a fully connected neural network on MCMC-simulated magnetoencephalography (MEG) data to perform parameter estimation for the spectral graph model in an accelerated manner. We found that the neural network was able to predict most parameters of interest without much loss in precision while generating the parameters in less than a second. This approach puts us closer to obtaining real time neurophysiological information from functional neuroimaging data for applications in diagnosis, prognosis, and characterization of various neurological diseases.