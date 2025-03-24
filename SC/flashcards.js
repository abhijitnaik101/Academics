const flashcards = [
    // **Introduction to Soft Computing**
    { question: "What are the main components of Soft Computing?", answer: "Neural Networks, Fuzzy Logic, and Genetic Algorithms." },
    { question: "What is Soft Computing?", answer: "Soft computing is a computational approach that deals with approximate reasoning and imprecision, unlike traditional hard computing." },

    // **Neural Networks: Basics**
    { question: "What is a Neural Network?", answer: "A neural network is a computing paradigm based on the human brain." },
    { question: "How do neural networks differ from other computing models?", answer: "Neural networks can classify, predict, and analyze data, making them distinct from other computing models." },
    { question: "What is a neuron in a neural network?", answer: "A neuron is a basic computational unit in a neural network that processes input signals." },

    // **Biological Neural Network**
    { question: "What is the function of soma in a biological neuron?", answer: "Soma acts as the control center, processing inputs and generating output signals." },
    { question: "What are dendrites and axons in biological neurons?", answer: "Dendrites receive signals, while axons transmit signals to other neurons." },
    { question: "What is a synapse?", answer: "A synapse is a junction where an axon connects to a dendrite for signal transmission." },

    // **Artificial Neural Networks**
    { question: "What are the three layers in an artificial neural network?", answer: "1. Input Layer\n2. Hidden Layer\n3. Output Layer" },
    { question: "What is the role of the hidden layer?", answer: "The hidden layer processes data between the input and output layers." },
    { question: "How is an artificial neuron similar to a biological neuron?", answer: "An artificial neuron mimics biological neurons using weighted inputs, processing, and activation functions." },

    // **Activation Functions**
    { question: "What is an activation function in neural networks?", answer: "A function that determines whether a neuron should be activated or not based on its inputs." },
    { question: "Why is an activation function important?", answer: "It introduces non-linearity, enabling neural networks to learn complex patterns." },

    // **Types of Activation Functions**
    { question: "What is the Heaviside activation function?", answer: "It activates the neuron if the input is greater than or equal to a threshold (θ), otherwise it remains inactive." },
    { question: "What is the equation for the Heaviside function?", answer: "If I >= θ → φ(I) = 1, else φ(I) = 0" },
    { question: "What is the Signum activation function?", answer: "It returns +1 if input is positive, and -1 if input is negative." },
    { question: "Write the equation for the Signum function.", answer: "If I > 0 → φ(I) = +1, If I < 0 → φ(I) = -1" },
    { question: "What is the Sigmoidal activation function?", answer: "A smooth function defined as φ(I) = 1 / (1 + e^(-α * I)), where α controls the curve steepness." },
    { question: "What is the Hyperbolic Tangent activation function?", answer: "It is defined as φ(I) = tanh(I), which outputs values between -1 and 1." },

    // **Mathematical Model of Artificial Neuron**
    { question: "What is the formula for weighted sum of inputs?", answer: "y = w1​x1​ + w2​x2​ + w3​x3​ + ... + wn​xn" },
    { question: "What is the role of weights in a neural network?", answer: "Weights determine the strength of influence of each input on the output." },
    { question: "What is a threshold value in neural networks?", answer: "A predefined value that determines whether a neuron should activate or not." },
    { question: "What is the output equation of a neuron with threshold?", answer: "y = φ(I - θ), where I is the sum of weighted inputs." },

    // **Fuzzy Logic**
    { question: "What is fuzzy logic?", answer: "Fuzzy logic is a mathematical approach that handles uncertainty and approximate reasoning." },
    { question: "What are fuzzy sets?", answer: "Fuzzy sets represent values with unclear boundaries instead of precise values." },
    { question: "What is the advantage of fuzzy logic over classical logic?", answer: "Fuzzy logic allows partial truth values instead of strict binary (true/false) values." },

    // **Genetic Algorithms**
    { question: "What are genetic algorithms?", answer: "A computational technique inspired by natural selection used to solve optimization problems." },
    { question: "What is the basis of genetic algorithms?", answer: "Genetic algorithms are based on gene behavior and genetic operations like selection, crossover, and mutation." },
    
    // **Long Questions (Conceptual)**
    { question: "Explain the structure of a biological neuron.", 
      answer: "A biological neuron consists of a soma (cell body), dendrites (signal receptors), and an axon (signal transmitter). The synapse connects the axon of one neuron to the dendrite of another, allowing communication." },

    { question: "Describe the working of an artificial neuron.", 
      answer: "An artificial neuron takes weighted inputs, sums them, applies an activation function, and produces an output. It mimics the functionality of a biological neuron." },

    { question: "Compare Heaviside, Signum, Sigmoid, and Hyperbolic Tangent activation functions.", 
      answer: "1. Heaviside: Binary activation (0 or 1)\n2. Signum: Outputs +1 or -1\n3. Sigmoid: Smooth curve between 0 and 1\n4. Hyperbolic Tangent: Outputs between -1 and 1, centered at 0." },

    { question: "Explain how neural networks process information using layers.", 
      answer: "The input layer receives data, the hidden layers process the data, and the output layer provides the final result. Each layer applies weights and activation functions to learn patterns." },

    { question: "Describe the process of a genetic algorithm.", 
      answer: "Genetic algorithms follow steps: \n1. Initialization of population\n2. Fitness evaluation\n3. Selection of parents\n4. Crossover (combining genes)\n5. Mutation (random changes)\n6. Repeating until optimal solution is found." }
,
    {
        question: "What is a Single Layer Feedforward Network?",
        answer: "A neural network with only one layer of processing units where input is weighted and passed directly to the output layer.\n💡 Memory Tip: Think of it as a straight road with no stops!"
    },
    {
        question: "Why is a Single Layer Feedforward Network called 'feedforward'?",
        answer: "Because the output from one layer is passed as input to the next layer without feedback.\n💡 Memory Tip: Data moves in only one direction, like water flowing in a pipe!"
    },
    {
        question: "How is output generated in a Single Layer Feedforward Network?",
        answer: "The activation function takes the weighted sum of inputs and produces an output.\n💡 Memory Tip: Like a calculator applying a formula!"
    },
    {
        question: "What is a Multilayer Feedforward Network?",
        answer: "A neural network with an input layer, one or more hidden layers, and an output layer, where each layer's output serves as the input for the next layer.\n💡 Memory Tip: Think of a relay race where each runner (layer) passes the baton!"
    },
    {
        question: "What is an (n-m-k) configuration in Multilayer Feedforward Networks?",
        answer: "It represents the number of neurons in the input layer (n), hidden layers (m), and output layer (k).\n💡 Memory Tip: It's like an address showing how many neurons are at each stage!"
    },
    {
        question: "What is a Recurrent Neural Network (RNN)?",
        answer: "A neural network with feedback loops where past outputs influence future inputs.\n💡 Memory Tip: RNNs 'remember' past events like human memory!"
    },
    {
        question: "How does an RNN learn over multiple iterations?",
        answer: "It calculates an error (difference between target and actual output) and feeds it back into the inputs to reduce error over time.\n💡 Memory Tip: Like improving your exam answers based on previous mistakes!"
    },
    {
        question: "What happens when an RNN stops reducing error?",
        answer: "The network is considered trained and can provide optimized results for new inputs.\n💡 Memory Tip: Like a student mastering a subject after enough practice!"
    }
,
    {
        question: "What is Supervised Learning?",
        answer: "Also known as learning from the teacher. In every step, we have an expected output (teacher) to find the error (difference between actual and expected output). This method tries to reduce the error in every step until the error is stabilized.\n💡 Memory Tip: Like a teacher correcting your homework until it's perfect!"
    },
    {
        question: "What is Stochastic Learning?",
        answer: "This methodology uses probabilistic mechanisms for weight adjustment based on the errors.\n💡 Memory Tip: Think of it as flipping a coin to decide adjustments!"
    },
    {
        question: "What is Gradient Descent in Stochastic Learning?",
        answer: "Gradient Descent minimizes the error in terms of weights and activation function of neurons. The formula used is: \nDelta(w_ij) = eta * (dE / dw_ij), where:\n- eta: Learning rate (Standard value = 0.6)\n- dE / dw_ij: Error gradient.\n💡 Memory Tip: Like adjusting your speed based on road conditions!"
    },
    {
        question: "What is Unsupervised Learning?",
        answer: "No teacher is present. The network learns itself by discovering and adapting to the environment.\n💡 Memory Tip: Like learning to walk without anyone teaching you!"
    },
    {
        question: "What is Hebbian Learning?",
        answer: "Hebbian Learning follows the rule: \nW = Summation from i=1 to n (x_i * y_i^T), where (x_i, y_i) are input/output and y^T is the transpose of y.\n💡 Memory Tip: 'Neurons that fire together, wire together!'"
    },
    {
        question: "What is Competitive Learning?",
        answer: "In this kind of network, neurons corresponding to external stimuli update their weights while others remain inactive. Hence, it is also called 'winner-takes-all'.\n💡 Memory Tip: Like a competition where only one player wins!"
    },
    {
        question: "What is Reinforced Learning?",
        answer: "In this learning method, the teacher is present but doesn’t provide the expected output. Instead, it evaluates the output to be correct or incorrect. A reward is provided for correct answers, whereas a penalty is given for wrong answers.\n💡 Memory Tip: Like a game where correct moves earn points and wrong moves lose points!"
    }
,
    {
        question: "Which neural networks use Gradient Descent in Single Layer Feedforward NN?",
        answer: "ADALINE, Hopfield Perceptron\n💡 Memory Tip: ADALINE and Hopfield Perceptron use weight adjustments based on errors!"
    },
    {
        question: "Which neural networks use Gradient Descent in Multilayer Feedforward NN?",
        answer: "CCN, MLFF, RBFN\n💡 Memory Tip: CCN (Convolutional), MLFF (Multilayer), RBFN (Radial) all improve accuracy!"
    },
    {
        question: "Which neural networks use Gradient Descent in Recurrent NN?",
        answer: "RNN, BAM\n💡 Memory Tip: RNN (Recurrent) and BAM (Bidirectional) both use backpropagation!"
    },
    {
        question: "Which networks use Hebbian Learning in Single Layer Feedforward NN?",
        answer: "AM, Hopfield\n💡 Memory Tip: AM (Associative Memory) and Hopfield store patterns!"
    },
    {
        question: "Which networks use Hebbian Learning in Multilayer Feedforward NN?",
        answer: "Neocognitron\n💡 Memory Tip: Neo means 'new', Neocognitron is advanced!"
    },
    {
        question: "Which networks use Hebbian Learning in Recurrent NN?",
        answer: "BSB, Hopfield\n💡 Memory Tip: BSB (Brain-State-in-a-Box) and Hopfield help in memory recall!"
    },
    {
        question: "Which networks use Competitive Learning in Single Layer Feedforward NN?",
        answer: "LVQ, SOFM\n💡 Memory Tip: LVQ (Learning Vector Quantization) and SOFM (Self-Organizing Feature Map) are for clustering!"
    },
    {
        question: "Which network uses Competitive Learning in Recurrent NN?",
        answer: "ART\n💡 Memory Tip: ART (Adaptive Resonance Theory) adapts dynamically!"
    },
    {
        question: "Which networks use Stochastic Learning in Recurrent NN?",
        answer: "Boltzmann Machine, Cauchy Machine\n💡 Memory Tip: These networks use randomness for learning!"
    }
,
    {
        question: "What is the perceptron model based on?",
        answer: "The model perceptron is based on the retina of the human eye.\n💡 Memory Tip: Think of perceptron as a simple version of the eye!"
    },
    {
        question: "What are the three units of a perceptron?",
        answer: "1. Sensory unit\n2. Association unit\n3. Response unit\n💡 Memory Tip: SAR (Sensory, Association, Response)!"
    },
    {
        question: "What does the sensory unit of a perceptron do?",
        answer: "The sensory unit consists of approximately 400 photodetectors, which receive the input image and provide a 0/1 signal as output."
    },
    {
        question: "What is the function of the response unit in a perceptron?",
        answer: "The response unit consists of pattern recognizers or perceptrons, which receive the result of the predicates."
    },
    {
        question: "What is the key limitation of a single ADALINE network?",
        answer: "A single ADALINE network cannot handle nonlinearly separable problems.\n💡 Memory Tip: ADALINE works only for 'straight-line' problems!"
    },
    {
        question: "What does MADALINE stand for?",
        answer: "MADALINE stands for Multiple ADALINE.\n💡 Memory Tip: Think of MADALINE as 'Many ADALINEs' working together!"
    },
    {
        question: "What is the main purpose of MADALINE?",
        answer: "The MADALINE network is designed to address problems that involve nonlinearly separable classes, which single ADALINE networks cannot handle effectively."
    },
    {
        question: "What is the learning algorithm used in ADALINE?",
        answer: "The learning algorithm is called the least mean square (LMS), which applies the delta rule for weight updation."
    },
    {
        question: "What is the general structure of a MADALINE network?",
        answer: "1. Input Layer: Receives inputs\n2. Hidden Layer: Contains multiple ADALINE networks\n3. Output Layer: Produces the final output"
    },
    {
        question: "What are some applications of neural networks?",
        answer: "1. Pattern Recognition\n2. Image Processing\n3. Optimization Problems\n4. Forecasting\n5. Risk Analysis\n6. Control Systems"
    }
,
    {
        question: "What type of learning does the Backpropagation Neural Network (BPNN) use?",
        answer: "The Backpropagation Neural Network is based on supervised learning, which uses a nonlinear activation function.\n💡 Memory Tip: 'Backpropagation' = 'Backtracking errors'!"
    },
    {
        question: "What is the purpose of backpropagation in a neural network?",
        answer: "Backpropagation calculates the error in the output and adjusts the weights in the neural network to minimize this error in the next iteration."
    },
    {
        question: "What are the different activation functions used in neural networks?",
        answer: "1. Piecewise Linear Activation Function\n2. Hard Limiter Activation Function\n3. Unipolar Sigmoidal\n4. Bipolar Sigmoidal\n5. Radial Basis Function (RBF)"
    },
    {
        question: "What is the formula for the Unipolar Sigmoidal Activation Function?",
        answer: "O = 1 / (1 + e^(-λI))"
    },
    {
        question: "What is the formula for the Bipolar Sigmoidal Activation Function?",
        answer: "O = tanh(λI)"
    },
    {
        question: "What is the formula for the Radial Basis Function (RBF)?",
        answer: "O = e^(- Σ (w_i * (t - x_i)²) / σ²)"
    },
    {
        question: "What determines the number of iterations in backpropagation?",
        answer: "The number of iterations depends on the stabilization of the weights in the neural network."
    },
    {
        question: "What happens when the weights are stabilized in BPNN?",
        answer: "Once the weights are stabilized, the neural network has learned successfully, and any dataset can be provided to get optimal results."
    },
    {
        question: "What are some applications of neural networks?",
        answer: "1. Pattern Recognition\n2. Image Processing\n3. Optimization\n4. Forecasting\n5. Risk Analysis\n6. Control Systems"
    }
,
    {
        question: "What is a key characteristic of the Hopfield Network?",
        answer: "Every neuron in the Hopfield network can have multiple inputs and a single output.\n💡 Memory Tip: 'Hopfield' = 'Hops between multiple inputs to one output'."
    },
    {
        question: "What is the output condition in a Hopfield Network?",
        answer: "If the weighted sum of inputs is greater than 0, the output is +1; otherwise, it is -1."
    },
    {
        question: "What are the two types of weight updation in the Hopfield Network?",
        answer: "1. **Asynchronous**: Weight is updated immediately in a random order.\n2. **Synchronous**: The sum of weighted inputs is first calculated, and then the new values are decided."
    },
    {
        question: "What is the structure of the Hopfield Network?",
        answer: "The network consists of **N artificial neurons**, which are fully connected."
    },
    {
        question: "How does pattern retrieval work in a Hopfield Network?",
        answer: "A pattern is entered into the network, weight updation occurs multiple times, and the input neurons retrieve stored patterns using Content Addressable Memory (CAM)."
    },
    {
        question: "What are the two parts of a stored pattern in the Hopfield Network?",
        answer: "1. **CUE**\n2. **Association**"
    },
    {
        question: "What happens when a cue is entered into the Hopfield Network?",
        answer: "The entire pattern stored in the weight matrix is retrieved."
    }
,
    {
        question: "What type of learning does Kohonen's Self-Organizing Map (SOM) use?",
        answer: "Kohonen's Self-Organizing Map (SOM) uses **unsupervised learning (competitive learning)**.\n💡 Memory Tip: 'Self-organizing' means learning without a teacher!"
    },
    {
        question: "Why is SOM also called a feature map?",
        answer: "SOM is called a **feature map** because it preserves the relationship between input data (features)."
    },
    {
        question: "How are the weights mapped in a SOM?",
        answer: "The weights in a SOM are mapped based on the input data."
    },
    {
        question: "What is the structure of a Self-Organizing Map (SOM)?",
        answer: "A SOM consists of **input nodes** and **mapped nodes**."
    },
    {
        question: "How are input nodes connected in SOM?",
        answer: "Each **input node connects to every mapped node**, but mapped nodes are **not connected among themselves**."
    },
    {
        question: "In a 4x4 SOM with 3 input nodes, how many total connections exist?",
        answer: "Total connections = 4 × 4 × 3 = **48 combinations**."
    },
    {
        question: "What determines weight updation in a SOM?",
        answer: "Since **mapped nodes are connected only to input nodes**, weight updation depends **only on input nodes**."
    },
    {
        question: "What is a Network Mapnode in SOM?",
        answer: "A **Network Mapnode** contains an **array of nodes and their weights**."
    },
    {
        question: "What does the Input Vector contain in a SOM?",
        answer: "The **Input Vector** contains **individual input vectors**, where each input vector is an **array of floats or weights**."
    },
    {
        question: "What condition must be met for the SOM algorithm to work?",
        answer: "The **weight vectors** must be **the same for mapped nodes and input vectors**; otherwise, the algorithm will not work."
    }
,
    {
        question: "What is the main concept behind the Radial Basis Function Network (RBFN)?",
        answer: "The **RBFN** is designed on the concept of **overlapping multiple receptive fields** to perform function mapping.\n💡 Memory Tip: 'Radial' means spreading out from a center, just like overlapping fields!"
    },
    {
        question: "Which common nonlinear functions are used in RBFN?",
        answer: "RBFN uses **sigmoidal functions** and **Gaussian kernel functions**."
    },
    {
        question: "What is the Gaussian function in RBFN?",
        answer: "The **Gaussian function** produces **identical output** for inputs existing **within a fixed radial distance** from the center of the kernel."
    },
    {
        question: "Why is RBFN called 'radially symmetric'?",
        answer: "Because its **Gaussian function** ensures that outputs are identical at equal distances from the center, making it **radially symmetric**."
    },
    {
        question: "What are the main layers in the RBFN architecture?",
        answer: "The **RBFN architecture** consists of:\n1. **Input Layer**: Receives input data.\n2. **Hidden Layer (RBF)**: Contains radial basis functions.\n3. **Output Layer**: Produces the final output."
    },
    {
        question: "How are the centers of receptive fields calculated in RBFN?",
        answer: "Different schemes are used, but the most popular is **maximum likelihood estimation**, where nodes compete to stay in the center based on likelihood."
    },
    {
        question: "Which algorithm can be used to calculate receptive field centers in RBFN?",
        answer: "The **K-means algorithm** can be used to determine the centers of radial basis functions."
    },
    {
        question: "What are the two types of RBFNs?",
        answer: "The two types of **Radial Basis Function Networks (RBFNs)** are:\n1. **Interpolation RBFN**\n2. **Approximation RBFN**"
    },
    {
        question: "What is an Interpolation RBFN?",
        answer: "**Interpolation RBFN** assumes that there is **no noise** in the training data and calculates a function to find the **exact output** for all training data."
    },
    {
        question: "What is an Approximation RBFN?",
        answer: "**Approximation RBFN** is used when the number of basis functions is **less than** the number of training patterns. The output may not be exact, hence called an approximation."
    }
,
    {
        question: "What is the difference between a fuzzy set and a crisp set?",
        answer: "**Crisp Set**: Answers are fixed.\n**Fuzzy Set**: Answers can vary from time to time (not fixed).\n💡 Memory Tip: Crisp = Clear, Fuzzy = Flexible!"
    },
    {
        question: "What is a fuzzy set?",
        answer: "A **fuzzy set** consists of values that **can vary** from time to time, given that the values are fixed."
    },
    {
        question: "How are fuzzy sets related to probability?",
        answer: "The values associated with a fuzzy set are often related to the **probability of occurrence** inside the set."
    },
    {
        question: "How is fuzzy logic mathematically represented?",
        answer: "Fuzzy logic is represented using **membership functions**, where each value has a **probability of belonging** to a set."
    },
    {
        question: "What is the Universe of Discourse in fuzzy logic?",
        answer: "The **Universe of Discourse** is the **set of all possible elements** or inputs."
    },
    {
        question: "What is a membership function in fuzzy logic?",
        answer: "A **membership function** defines the **probability of occurrence** of an element inside a set."
    },
    {
        question: "What is the role of a membership function in fuzzy sets?",
        answer: "The **membership function quantifies** the degree to which an element belongs to a fuzzy set, ranging from **0 (no membership) to 1 (full membership).**"
    },
    {
        question: "How does a fuzzy set handle uncertainty?",
        answer: "**Fuzzy sets allow for uncertainty and variability** in data, unlike crisp sets, which have fixed boundaries."
    }
];
