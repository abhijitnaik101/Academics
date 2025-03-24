const differences = [
    {
        question: "What is the difference between Biological and Artificial Neurons?",
        topic1: "Biological Neuron",
        topic2: "Artificial Neuron",
        points: [
            ["Composed of soma, dendrites, and axon", "Has input, hidden, and output layers"],
            ["Uses electrical and chemical signals", "Uses numerical computations"],
            ["Learns through experience and adaptation", "Learns through algorithms and weights"],
            ["Processes signals via synapses", "Processes signals using mathematical functions"],
            ["Slow and energy-efficient", "Fast but computationally expensive"]
        ]
    },
    {
        question: "What is the difference between Hard Computing and Soft Computing?",
        topic1: "Hard Computing",
        topic2: "Soft Computing",
        points: [
            ["Requires exact solutions", "Handles approximate solutions"],
            ["Uses binary logic (0 or 1)", "Uses fuzzy logic (partial truth)"],
            ["Works on strict rules", "More flexible and adaptable"],
            ["Not tolerant to uncertainty", "Can handle uncertainty effectively"],
            ["Example: Traditional algorithms", "Example: Neural networks, genetic algorithms"]
        ]
    },
    {
        question: "What is the difference between Neural Networks and Traditional Algorithms?",
        topic1: "Neural Networks",
        topic2: "Traditional Algorithms",
        points: [
            ["Inspired by the human brain", "Follows predefined step-by-step logic"],
            ["Learns from data (adaptive)", "Works with fixed rules and conditions"],
            ["Useful for pattern recognition and prediction", "Best for deterministic problems"],
            ["Can handle incomplete and noisy data", "Requires well-defined inputs"],
            ["Examples: Deep Learning, AI systems", "Examples: Sorting, searching algorithms"]
        ]
    },
    {
        question: "What is the difference between Fuzzy Logic and Boolean Logic?",
        topic1: "Fuzzy Logic",
        topic2: "Boolean Logic",
        points: [
            ["Deals with partial truth values", "Works only with 0 and 1 (true/false)"],
            ["Used in AI, control systems, and decision-making", "Used in traditional computing"],
            ["Allows flexibility and uncertainty", "Strict and rigid decision-making"],
            ["Example: Automatic climate control", "Example: Digital circuits"]
        ]
    },
    {
        question: "What is the difference between Genetic Algorithms and Traditional Algorithms?",
        topic1: "Genetic Algorithms",
        topic2: "Traditional Algorithms",
        points: [
            ["Inspired by natural selection and evolution", "Follows a fixed logical approach"],
            ["Works with populations of solutions", "Solves problems using a direct approach"],
            ["Uses selection, crossover, and mutation", "Does not involve random mutations"],
            ["Explores multiple solutions in parallel", "Works in a sequential manner"],
            ["Used in optimization and AI", "Used in structured problem-solving"]
        ]
    }
,
    {
        question: "What is the difference between a Single Layer and Multilayer Feedforward Network?",
        topic1: "Single Layer Feedforward Network",
        topic2: "Multilayer Feedforward Network",
        points: [
            ["Contains only one layer of processing units", "Has multiple layers including hidden layers"],
            ["Input connects directly to output", "Data passes through intermediate hidden layers"],
            ["Limited to solving simple classification tasks", "Can handle complex problems like image recognition"],
            ["Example: Perceptron", "Example: Deep Neural Networks"]
        ]
    },
    {
        question: "What is the difference between Feedforward and Recurrent Neural Networks?",
        topic1: "Feedforward Neural Network",
        topic2: "Recurrent Neural Network",
        points: [
            ["Data moves in one direction", "Has feedback loops between layers"],
            ["Does not use previous outputs", "Uses past outputs to influence future inputs"],
            ["Better for static data processing", "Better for sequential tasks like speech recognition"],
            ["Example: Convolutional Neural Networks", "Example: Long Short-Term Memory (LSTM) networks"]
        ]
    },
    {
        question: "What is the difference between Single Layer Feedforward Network and Recurrent Neural Network?",
        topic1: "Single Layer Feedforward Network",
        topic2: "Recurrent Neural Network",
        points: [
            ["Has only one processing layer", "Has multiple layers and feedback loops"],
            ["No memory of past inputs", "Stores past outputs to improve learning"],
            ["Used for simple classification tasks", "Used for tasks involving sequential dependencies"],
            ["Example: Perceptron", "Example: LSTM, GRU"]
        ]
    },
    {
        question: "What is the difference between Multilayer Feedforward Network and Recurrent Neural Network?",
        topic1: "Multilayer Feedforward Network",
        topic2: "Recurrent Neural Network",
        points: [
            ["No feedback loops", "Has feedback loops"],
            ["Used for image processing, classification", "Used for time-series prediction, speech processing"],
            ["Every input is independent", "Previous outputs influence future inputs"],
            ["Example: Deep Neural Networks", "Example: Long Short-Term Memory (LSTM)"]
        ]
    }
,
    {
        question: "What is the difference between Supervised and Unsupervised Learning?",
        topic1: "Supervised Learning",
        topic2: "Unsupervised Learning",
        points: [
            ["Has a teacher to provide expected output", "No teacher is present"],
            ["Error is reduced step by step", "Learns by discovering patterns in data"],
            ["Commonly used for classification and regression", "Commonly used for clustering and anomaly detection"],
            ["Example: Neural networks trained with labeled data", "Example: K-means clustering"]
        ]
    },
    {
        question: "What is the difference between Stochastic Learning and Gradient Descent?",
        topic1: "Stochastic Learning",
        topic2: "Gradient Descent",
        points: [
            ["Uses probabilistic mechanisms for weight adjustment", "Minimizes error using mathematical gradient calculations"],
            ["Updates weights randomly based on errors", "Follows a systematic approach using the error gradient"],
            ["Less computationally intensive", "More stable and precise"],
            ["Example: Boltzmann Machine", "Example: Backpropagation in neural networks"]
        ]
    },
    {
        question: "What is the difference between Hebbian Learning and Competitive Learning?",
        topic1: "Hebbian Learning",
        topic2: "Competitive Learning",
        points: [
            ["Based on strengthening frequently used connections", "Only one neuron updates weights while others remain inactive"],
            ["Uses the formula: W = Summation (x_i * y_i^T)", "Neurons compete, and the 'winner' updates its weights"],
            ["All neurons participate in learning", "Only the strongest neuron learns"],
            ["Example: Hopfield Network", "Example: Self-Organizing Feature Map (SOFM)"]
        ]
    },
    {
        question: "What is the difference between Competitive Learning and Reinforced Learning?",
        topic1: "Competitive Learning",
        topic2: "Reinforced Learning",
        points: [
            ["Neurons compete, and only one updates weights", "The network receives feedback in the form of rewards and penalties"],
            ["No external evaluation is provided", "Output is evaluated as correct or incorrect"],
            ["Used in clustering and pattern recognition", "Used in decision-making systems and AI agents"],
            ["Example: LVQ (Learning Vector Quantization)", "Example: Q-Learning in AI"]
        ]
    }
,
    {
        question: "What is the difference between Gradient Descent and Hebbian Learning?",
        topic1: "Gradient Descent",
        topic2: "Hebbian Learning",
        points: [
            ["Minimizes error using an optimization function", "Strengthens frequently activated neuron connections"],
            ["Uses error gradient to adjust weights", "Uses the formula: W = Summation (x_i * y_i^T)"],
            ["Used in ADALINE, Hopfield Perceptron", "Used in AM, Hopfield Networks"],
            ["Common in supervised learning", "Common in unsupervised learning"]
        ]
    },
    {
        question: "What is the difference between Competitive Learning and Stochastic Learning?",
        topic1: "Competitive Learning",
        topic2: "Stochastic Learning",
        points: [
            ["Winner-takes-all approach", "Uses probabilistic mechanisms for weight adjustment"],
            ["Neurons compete for activation", "Weight changes depend on randomness"],
            ["Example: LVQ, SOFM", "Example: Boltzmann Machine, Cauchy Machine"]
        ]
    },
    {
        question: "What is the difference between Competitive Learning and Hebbian Learning?",
        topic1: "Competitive Learning",
        topic2: "Hebbian Learning",
        points: [
            ["Only one neuron updates weight", "Multiple neurons strengthen their weights"],
            ["Used in clustering and feature mapping", "Used in associative memory"],
            ["Example: LVQ, SOFM", "Example: Hopfield Network"]
        ]
    }
,
    {
        question: "What is the difference between ADALINE and MADALINE?",
        topic1: "ADALINE",
        topic2: "MADALINE",
        points: [
            ["Has only one output neuron", "Uses multiple ADALINE networks"],
            ["Solves linearly separable problems", "Solves nonlinearly separable problems"],
            ["Uses the least mean square (LMS) learning algorithm", "Uses multiple ADALINE networks to improve learning"]
        ]
    },
    {
        question: "What is the difference between Perceptron and ADALINE?",
        topic1: "Perceptron",
        topic2: "ADALINE",
        points: [
            ["Uses step function for activation", "Uses continuous function for activation"],
            ["Cannot learn from errors", "Uses LMS algorithm to minimize errors"],
            ["Only works with binary inputs", "Can handle bipolar (-1,1) outputs"]
        ]
    },
    {
        question: "What is the difference between a Single ADALINE and MADALINE?",
        topic1: "Single ADALINE",
        topic2: "MADALINE",
        points: [
            ["Has a single layer", "Has multiple ADALINE layers"],
            ["Cannot classify nonlinearly separable problems", "Can classify nonlinearly separable problems"],
            ["Has only one output neuron", "Has a multilayer structure for better learning"]
        ]
    }
,
    {
        question: "What is the difference between Unipolar and Bipolar Sigmoidal activation functions?",
        topic1: "Unipolar Sigmoidal",
        topic2: "Bipolar Sigmoidal",
        points: [
            ["O = 1 / (1 + e^-λI)", "O = tanh(λI)"],
            ["Output lies between 0 and 1", "Output lies between -1 and 1"],
            ["Used in simpler networks", "Common in complex neural networks"]
        ]
    },
    {
        question: "What is the difference between Piecewise Linear and Hard Limiter activation functions?",
        topic1: "Piecewise Linear",
        topic2: "Hard Limiter",
        points: [
            ["Output varies in steps", "Output is either -1 or 1"],
            ["Provides a smooth transition", "Acts as a strict threshold"],
            ["Used in complex decision-making", "Used for binary classifications"]
        ]
    },
    {
        question: "How is Backpropagation different from Radial Basis Function (RBF) Networks?",
        topic1: "Backpropagation Neural Network (BPNN)",
        topic2: "Radial Basis Function (RBF) Network",
        points: [
            ["Uses gradient-based weight adjustments", "Uses radial basis function for activation"],
            ["Common in deep learning", "Common in function approximation"],
            ["Adjusts weights iteratively", "Uses distance-based activation"]
        ]
    }
,
    {
        question: "What is the difference between Asynchronous and Synchronous weight updation in a Hopfield Network?",
        topic1: "Asynchronous",
        topic2: "Synchronous",
        points: [
            ["Weight is updated immediately", "Weights are updated after calculating the sum of inputs"],
            ["Neurons update randomly", "All neurons update at the same time"],
            ["Less stable but faster", "More stable but slower"]
        ]
    },
    {
        question: "What is the difference between Hopfield Network and Feedforward Neural Networks?",
        topic1: "Hopfield Network",
        topic2: "Feedforward Neural Network",
        points: [
            ["Fully connected recurrent network", "Layered structure without feedback"],
            ["Works with Content Addressable Memory (CAM)", "Uses backpropagation for learning"],
            ["Mainly used for pattern recognition", "Used for various deep learning tasks"]
        ]
    }
,
    {
        question: "What is the difference between Kohonen's SOM and Feedforward Neural Networks?",
        topic1: "Kohonen's SOM",
        topic2: "Feedforward Neural Network",
        points: [
            ["Uses unsupervised learning", "Uses supervised learning"],
            ["Preserves feature relationships", "Trains on labeled data"],
            ["Nodes compete for activation", "Nodes activate in layers"],
            ["No direct mapping between input and output", "Has a defined input-output relationship"]
        ]
    },
    {
        question: "What is the difference between Mapped Nodes and Input Nodes in SOM?",
        topic1: "Mapped Nodes",
        topic2: "Input Nodes",
        points: [
            ["Do not connect among themselves", "Each connects to every mapped node"],
            ["Used for storing learned features", "Provide raw input data"],
            ["Weight update depends on input nodes", "Weight values influence learning process"]
        ]
    }
,
    {
        question: "What is the difference between Interpolation RBFN and Approximation RBFN?",
        topic1: "Interpolation RBFN",
        topic2: "Approximation RBFN",
        points: [
            ["Finds exact outputs for all training data", "Finds approximate outputs"],
            ["Assumes no noise in training data", "Handles noisy or complex data"],
            ["Uses same number of basis functions as training patterns", "Uses fewer basis functions than training patterns"],
            ["Does not generalize well", "Generalizes better for unknown data"]
        ]
    },
    {
        question: "What is the difference between RBFN and Feedforward Neural Networks?",
        topic1: "RBFN",
        topic2: "Feedforward Neural Networks",
        points: [
            ["Uses radial basis functions for activation", "Uses ReLU, sigmoid, or tanh"],
            ["Works well for local patterns", "Works for global patterns"],
            ["Centers of receptive fields are determined using K-means", "Weights are learned using backpropagation"],
            ["Radial symmetry in function mapping", "Layer-wise processing without radial symmetry"]
        ]
    }
,
    {
        question: "What is the difference between a Crisp Set and a Fuzzy Set?",
        topic1: "Crisp Set",
        topic2: "Fuzzy Set",
        points: [
            ["Has fixed values", "Values can vary over time"],
            ["Elements either belong or don’t belong", "Elements have degrees of belonging"],
            ["Based on Boolean logic (0 or 1)", "Based on probability and membership functions"],
            ["Used in classical mathematics", "Used in fuzzy logic and AI applications"]
        ]
    }
];
