# Computation and Code Operations

## Reproducibility first
Before extending code:
1. Identify the expected input and output.
2. Reproduce the current result.
3. Record environment, versions, seeds, and paths.
4. Isolate the smallest failing or uncertain component.

## Diagnostic branches
- Unit tests for transformations
- Invariance checks
- Merge and key validation
- Missingness and type checks
- Seed/stochastic sensitivity
- Numerical stability
- Independent reimplementation of a core calculation
- Synthetic-data recovery test
- Profiling and resource bottlenecks

## Anti-degradation rule
Do not rewrite a pipeline simply because it is complex. Prefer a minimal test that discriminates between plausible failure causes.

## Progress artifact
Leave runnable code, tests, logs, environment specification, or a confirmed failure boundary.
