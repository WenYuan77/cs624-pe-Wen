# Input  
This React Native mobile app does not require any external input from the user. All displayed information—such as the user's name, degree program, and school—is hardcoded directly into the source code using `Text` components. Therefore, the app starts with predefined values and does not rely on runtime input or user interaction.

# Process  
When the application launches, it renders a single `View` component that contains three `Text` components. These are styled using a `StyleSheet` to align the text in the center and set the background color to yellow. React Native interprets this layout and converts it into native components suitable for Android or iOS. Since there is no dynamic data processing or interaction, the app flow is linear and static.

# Output  
The final output is a mobile screen with a yellow background that displays the user’s name, degree program, and school in the center. It serves as a basic demonstration of static text rendering in React Native.