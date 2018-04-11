
## Data preprocessing

Guys welcome to Machine Learning Bootcamp conducted by ACM JUIT Student Chapter, This is a community developed materials by Team Bootcamp for general reading.

> Feel free to use it for whatsoever you wish, make changes and distribute whereever you wish, just add credits before reproducing :)

### Why preprocessing ?

**Real world data are generally Incomplete such as, lacking attribute values, lacking certain attributes of interest, or containing only aggregate data**

- Noisy: containing errors or outliers
- Inconsistent: containing discrepancies in codes or names

**Tasks in data preprocessing:**

- Data cleaning: fill in missing values, smooth noisy data, identify or remove outliers, and resolve inconsistencies.
- Data integration: using multiple databases, data cubes, or files.
- Data transformation: normalization and aggregation.
- Data reduction: reducing the volume but producing the same or similar analytical results.
- Data discretization: part of data reduction, replacing numerical attributes with nominal ones.

### Data cleaning

- Fill in missing values (attribute or class value):
       * Ignore the tuple: usually done when class label is missing.
       * Use the attribute mean (or majority nominal value) to fill in the missing value.
       * Use the attribute mean (or majority nominal value) for all samples belonging to the same class.
       * Predict the missing value by using a learning algorithm
- Identify outliers and smooth out noisy data:
        * Binning
            ** Sort the attribute values and partition them into bins (see "Unsupervised discretization" below);
            ** Then smooth by bin means,  bin median, or  bin boundaries.
        * Clustering: group values in clusters and then detect and remove outliers (automatic or manual)
        * Regression: smooth by fitting the data into regression functions.
- Correct inconsistent data: use domain knowledge or expert decision.

### Data transformation

- Normalization:
       * Scaling attribute values to fall within a specified range.
       * Scaling by using mean and standard deviation
- Aggregation: moving up in the concept hierarchy on numeric attributes.
- Generalization: moving up in the concept hierarchy on nominal attributes.
- Attribute construction: replacing or adding new attributes inferred by existing attributes.

### Data reduction

- Reducing the number of attributes
        * Data cube aggregation: applying roll-up, slice or dice operations.
        * Removing irrelevant attributes: attribute selection (filtering and wrapper methods), 
        * Principle component analysis (numeric attributes only)
- Reducing the number of attribute values
        * Binning (histograms): reducing the number of attributes by grouping them into intervals (bins).
        * Clustering: grouping values in clusters.
        * Aggregation or generalization
- Reducing the number of tuples
        * Sampling

### Discretization and generating concept hierarchies

- Unsupervised discretization -  class variable is not used.
        * Equal-interval (equiwidth) binning: split the whole range of numbers in intervals with equal size.
        * Equal-frequency (equidepth) binning: use intervals containing equal number of values.
- Supervised discretization - uses the values of the class variable.
        * Using class boundaries. Three steps:
            Sort values.
            Place breakpoints between values belonging to different classes.
            If too many intervals, merge intervals with equal or similar class distributions.
        * Entropy (information)-based discretization. Example:
            
- Generating concept hierarchies: recursively applying partitioning or discretization methods.


