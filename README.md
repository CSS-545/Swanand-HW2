# HW2 - Swanand Wagh

#### Question: Various approaches to storage management on your platform of choice. Pros/cons of each approach for your project

In a React Native project targeting Android, there are several approaches to storage management. Here are some common approaches:

**1. AsyncStorage**:

- **Pros**: AsyncStorage is a simple key-value storage that is built into React Native. It is easy to use and suitable for storing small amounts of data like session tokens. AsyncStorage is asynchronous, allowing non-blocking reads and writes.
- **Cons**: AsyncStorage has limitations in terms of storage size (usually limited to a few megabytes) and performance, especially for larger datasets.

**2. File System Storage**:

- **Pros**: Storing data directly on the device's file system provides flexibility and control over data organization and access. This approach is suitable for handling large files or structured data that doesn't fit well into key-value or relational formats.
- **Cons**: Managing files directly can be more complex than using AsyncStorage, especially when dealing with file I/O operations, permissions, and data synchronization.

**3. External Storage (SD card)**:

- **Pros**: Storing data on external storage such as an SD card provides additional storage capacity beyond the device's internal storage. This approach is useful for apps that need to store large files or datasets that exceed the device's internal storage limits.
- **Cons**: Accessing external storage requires permission from the user and may introduce security risks if not handled properly. External storage may also be slower than internal storage, especially on older devices or devices with slower SD cards.

**4. Cloud Storage**:

- **Pros**: Storing data on cloud storage services offers scalability, redundancy, and accessibility across devices. It is suitable for apps that need to synchronize data across multiple devices or provide access to large datasets without consuming local storage space.
- **Cons**: Cloud storage requires an internet connection and may introduce latency and reliability issues. Also most of the times, it is very expensive.

#### Screenshots
![First ss](https://raw.githubusercontent.com/CSS-545/Swanand-HW2/main/assets/1.jpg)

![Second ss](https://raw.githubusercontent.com/CSS-545/Swanand-HW2/main/assets/2.jpg)

![Third ss](https://raw.githubusercontent.com/CSS-545/Swanand-HW2/main/assets/3.jpg)