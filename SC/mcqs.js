const mcqs = [
    // **Neural Networks**
    { 
        question: "What is the primary function of a neural network?", 
        options: ["Data Storage", "Classification, Prediction, and Analysis", "Simple Computation", "Only Image Recognition"], 
        answer: "Classification, Prediction, and Analysis" 
    },
    { 
        question: "What are the three layers in an artificial neural network?", 
        options: ["Input, Hidden, Output", "Neuron, Axon, Dendrite", "Activation, Processing, Output", "Input, Synapse, Output"], 
        answer: "Input, Hidden, Output" 
    },
    { 
        question: "Which activation function is a step function?", 
        options: ["Heaviside", "Signum", "Sigmoid", "Hyperbolic Tangent"], 
        answer: "Heaviside" 
    },
    { 
        question: "What is the role of weights in a neural network?", 
        options: ["To store data", "To strengthen or weaken input signals", "To activate neurons", "To determine network depth"], 
        answer: "To strengthen or weaken input signals" 
    },
    
    // **Fuzzy Logic**
    { 
        question: "What is fuzzy logic mainly used for?", 
        options: ["Precise decision-making", "Handling uncertainty and approximate reasoning", "Exact calculations", "Binary computation"], 
        answer: "Handling uncertainty and approximate reasoning" 
    },
    { 
        question: "Which of the following is an advantage of fuzzy logic?", 
        options: ["Handles uncertain data", "Faster than traditional logic", "Requires no processing", "Limited to binary data"], 
        answer: "Handles uncertain data" 
    },
    
    // **Genetic Algorithms**
    { 
        question: "What is the first step in a genetic algorithm?", 
        options: ["Selection", "Initialization", "Mutation", "Crossover"], 
        answer: "Initialization" 
    },
    { 
        question: "Which of the following is NOT an operation in genetic algorithms?", 
        options: ["Selection", "Crossover", "Backpropagation", "Mutation"], 
        answer: "Backpropagation" 
    },
    { 
        question: "What is the purpose of mutation in genetic algorithms?", 
        options: ["To select the best individual", "To introduce diversity in population", "To eliminate weak solutions", "To copy genes exactly"], 
        answer: "To introduce diversity in population" 
    }
, //Neural network architecture
    {
        question: "How many processing layers does a Single Layer Feedforward Network have?",
        options: ["One", "Two", "Three", "Multiple"],
        correctAnswer: "One"
    },
    {
        question: "Why is a Single Layer Feedforward Network called 'feedforward'?",
        options: [
            "Because it has feedback loops",
            "Because data moves in a single direction",
            "Because it has multiple hidden layers",
            "Because it can store past outputs"
        ],
        correctAnswer: "Because data moves in a single direction"
    },
    {
        question: "Which of the following is true about Multilayer Feedforward Networks?",
        options: [
            "They contain only one processing layer",
            "They have multiple layers including hidden layers",
            "They are not used for complex problems",
            "They do not require activation functions"
        ],
        correctAnswer: "They have multiple layers including hidden layers"
    },
    {
        question: "What does the (n-m-k) configuration in Multilayer Feedforward Networks represent?",
        options: [
            "Number of hidden layers",
            "Number of neurons in input, hidden, and output layers",
            "Number of layers in RNNs",
            "Number of weight matrices used"
        ],
        correctAnswer: "Number of neurons in input, hidden, and output layers"
    },
    {
        question: "Which type of neural network has feedback loops?",
        options: [
            "Single Layer Feedforward Network",
            "Multilayer Feedforward Network",
            "Recurrent Neural Network",
            "Convolutional Neural Network"
        ],
        correctAnswer: "Recurrent Neural Network"
    },
    {
        question: "How does an RNN reduce error over multiple iterations?",
        options: [
            "By ignoring past outputs",
            "By using error feedback to modify future inputs",
            "By adding more neurons",
            "By removing feedback loops"
        ],
        correctAnswer: "By using error feedback to modify future inputs"
    },
    {
        question: "When is an RNN considered fully trained?",
        options: [
            "When error continues to increase",
            "When no further reduction in error occurs",
            "When all hidden layers are removed",
            "When feedback loops are disabled"
        ],
        correctAnswer: "When no further reduction in error occurs"
    }
,
    {
        question: "What is another name for Supervised Learning?",
        options: ["Learning from the environment", "Learning from the teacher", "Self-learning", "Probabilistic learning"],
        correctAnswer: "Learning from the teacher"
    },
    {
        question: "What does Supervised Learning aim to reduce?",
        options: ["Weight updates", "Number of neurons", "Error in every step", "Number of layers"],
        correctAnswer: "Error in every step"
    },
    {
        question: "Which learning technique does NOT have a teacher?",
        options: ["Supervised Learning", "Unsupervised Learning", "Reinforced Learning", "Stochastic Learning"],
        correctAnswer: "Unsupervised Learning"
    },
    {
        question: "Which formula represents weight adjustment in Gradient Descent?",
        options: [
            "W = Summation from i=1 to n (x_i * y_i^T)",
            "Delta(w_ij) = eta * (dE / dw_ij)",
            "W = W_old + delta_W",
            "E = mc^2"
        ],
        correctAnswer: "Delta(w_ij) = eta * (dE / dw_ij)"
    },
    {
        question: "What is the standard value of eta (learning rate) in Gradient Descent?",
        options: ["0.1", "0.3", "0.6", "1.0"],
        correctAnswer: "0.6"
    },
    {
        question: "What is the main idea behind Hebbian Learning?",
        options: [
            "Minimizing the error function",
            "Updating weights based on probability",
            "Strengthening connections between frequently used neurons",
            "Training the network using backpropagation"
        ],
        correctAnswer: "Strengthening connections between frequently used neurons"
    },
    {
        question: "Which learning method uses a reward-penalty system?",
        options: ["Supervised Learning", "Reinforced Learning", "Unsupervised Learning", "Competitive Learning"],
        correctAnswer: "Reinforced Learning"
    },
    {
        question: "Which learning technique is also called 'winner-takes-all'?",
        options: ["Supervised Learning", "Competitive Learning", "Reinforced Learning", "Stochastic Learning"],
        correctAnswer: "Competitive Learning"
    }
,
    {
        question: "Which learning method does ADALINE and Hopfield Perceptron use?",
        options: ["Gradient Descent", "Hebbian Learning", "Competitive Learning", "Stochastic Learning"],
        correctAnswer: "Gradient Descent"
    },
    {
        question: "Which neural networks use Gradient Descent in a Multilayer Feedforward NN?",
        options: ["AM, Hopfield", "CCN, MLFF, RBFN", "Boltzmann Machine, Cauchy Machine", "LVQ, SOFM"],
        correctAnswer: "CCN, MLFF, RBFN"
    },
    {
        question: "Which recurrent networks use Hebbian Learning?",
        options: ["BSB, Hopfield", "BAM, RNN", "LVQ, SOFM", "Boltzmann Machine, Cauchy Machine"],
        correctAnswer: "BSB, Hopfield"
    },
    {
        question: "Which networks use Competitive Learning in Single Layer Feedforward NN?",
        options: ["LVQ, SOFM", "ADALINE, Hopfield", "BSB, Hopfield", "Boltzmann Machine, Cauchy Machine"],
        correctAnswer: "LVQ, SOFM"
    },
    {
        question: "Which recurrent network follows Competitive Learning?",
        options: ["ART", "BAM", "RNN", "Neocognitron"],
        correctAnswer: "ART"
    },
    {
        question: "Which networks follow Stochastic Learning in Recurrent NN?",
        options: ["Boltzmann Machine, Cauchy Machine", "ADALINE, Hopfield", "CCN, MLFF, RBFN", "AM, Hopfield"],
        correctAnswer: "Boltzmann Machine, Cauchy Machine"
    }
,
    {
        question: "Which biological system inspired the perceptron model?",
        options: ["Human brain", "Retina of the human eye", "Neuron synapses", "Blood circulation"],
        correctAnswer: "Retina of the human eye"
    },
    {
        question: "Which unit in a perceptron processes input images?",
        options: ["Association unit", "Response unit", "Sensory unit", "Hidden unit"],
        correctAnswer: "Sensory unit"
    },
    {
        question: "What is the main limitation of a single ADALINE network?",
        options: ["Cannot classify nonlinearly separable problems", "Requires a large dataset", "Cannot handle multiple inputs", "Has too many layers"],
        correctAnswer: "Cannot classify nonlinearly separable problems"
    },
    {
        question: "Which learning algorithm does ADALINE use?",
        options: ["Gradient Descent", "Delta Rule (LMS)", "Backpropagation", "Winner-takes-all"],
        correctAnswer: "Delta Rule (LMS)"
    },
    {
        question: "Which neural network is a combination of multiple ADALINE networks?",
        options: ["MADALINE", "Perceptron", "Hopfield Network", "RBFN"],
        correctAnswer: "MADALINE"
    },
    {
        question: "Which of the following is NOT an application of neural networks?",
        options: ["Pattern Recognition", "Forecasting", "Cooking Recipes", "Image Processing"],
        correctAnswer: "Cooking Recipes"
    }
,
    {
        question: "What type of learning is used in Backpropagation Neural Networks?",
        options: ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Competitive Learning"],
        correctAnswer: "Supervised Learning"
    },
    {
        question: "Which function determines the output in a Hard Limiter Activation Function?",
        options: ["Sigmoid function", "Piecewise linear function", "Sign function (sgn I)", "Tanh function"],
        correctAnswer: "Sign function (sgn I)"
    },
    {
        question: "Which activation function is used in Radial Basis Function (RBF) networks?",
        options: ["Sigmoid function", "Hard limiter function", "Radial basis function", "Tanh function"],
        correctAnswer: "Radial basis function"
    },
    {
        question: "What does the backpropagation process do in a neural network?",
        options: ["Increases the number of neurons", "Adjusts weights to minimize error", "Removes redundant layers", "Enhances activation functions"],
        correctAnswer: "Adjusts weights to minimize error"
    },
    {
        question: "Which function is represented by O = 1 / (1 + e^-λI)?",
        options: ["Bipolar Sigmoidal", "Unipolar Sigmoidal", "Piecewise Linear", "Radial Basis Function"],
        correctAnswer: "Unipolar Sigmoidal"
    },
    {
        question: "What is the main stopping criterion in a Backpropagation Neural Network?",
        options: ["When input data is exhausted", "When weights are stabilized", "When error increases", "When all neurons are activated"],
        correctAnswer: "When weights are stabilized"
    }
,
    {
        question: "How many outputs does each neuron have in the Hopfield Network?",
        options: ["Multiple outputs", "Zero outputs", "A single output", "Variable outputs"],
        correctAnswer: "A single output"
    },
    {
        question: "What happens when the weighted sum of inputs in a Hopfield Network is greater than 0?",
        options: ["Output is -1", "Output is +1", "Neuron deactivates", "Network resets"],
        correctAnswer: "Output is +1"
    },
    {
        question: "What are the types of weight updation in the Hopfield Network?",
        options: ["Batch and Online", "Supervised and Unsupervised", "Asynchronous and Synchronous", "Gradient and Stochastic"],
        correctAnswer: "Asynchronous and Synchronous"
    },
    {
        question: "How are neurons connected in the Hopfield Network?",
        options: ["Partially connected", "Fully connected", "Randomly connected", "Connected in layers"],
        correctAnswer: "Fully connected"
    },
    {
        question: "What does Content Addressable Memory (CAM) do in a Hopfield Network?",
        options: ["Stores and retrieves patterns", "Forwards signals to hidden layers", "Modifies activation functions", "Increases learning rate"],
        correctAnswer: "Stores and retrieves patterns"
    },
    {
        question: "What is the role of a CUE in the Hopfield Network?",
        options: ["It trains the network", "It updates the weights", "It helps retrieve the stored pattern", "It modifies the learning rate"],
        correctAnswer: "It helps retrieve the stored pattern"
    }
,
    {
        question: "What type of learning does Kohonen’s Self-Organizing Map (SOM) use?",
        options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Hybrid Learning"],
        correctAnswer: "Unsupervised Learning"
    },
    {
        question: "Why is SOM called a feature map?",
        options: ["Because it maps labels to input data", "Because it preserves relationships between features", "Because it modifies feature values", "Because it labels data automatically"],
        correctAnswer: "Because it preserves relationships between features"
    },
    {
        question: "Which nodes are connected in a SOM?",
        options: ["Mapped nodes only", "Input nodes only", "Input nodes to mapped nodes", "Mapped nodes to mapped nodes"],
        correctAnswer: "Input nodes to mapped nodes"
    },
    {
        question: "How many connections exist in a 4x4 SOM with 3 input nodes?",
        options: ["16", "32", "48", "64"],
        correctAnswer: "48"
    },
    {
        question: "What determines weight updation in SOM?",
        options: ["Mapped nodes only", "Input nodes only", "Both mapped and input nodes", "Random values"],
        correctAnswer: "Input nodes only"
    },
    {
        question: "What is the role of the Input Vector in SOM?",
        options: ["Stores bias values", "Contains an array of floats or weights", "Updates the weights directly", "Reduces network complexity"],
        correctAnswer: "Contains an array of floats or weights"
    },
    {
        question: "What condition must be met for SOM to function correctly?",
        options: ["Mapped nodes must be connected", "Weights must be identical", "Weight vectors must match for mapped nodes and input vectors", "All input vectors must be the same"],
        correctAnswer: "Weight vectors must match for mapped nodes and input vectors"
    }
,
    {
        question: "What is the primary function of the Radial Basis Function Network (RBFN)?",
        options: ["Perform linear regression", "Overlapping multiple receptive fields for function mapping", "Backpropagation learning", "Clustering data using sigmoid activation"],
        correctAnswer: "Overlapping multiple receptive fields for function mapping"
    },
    {
        question: "Which activation functions are commonly used in RBFN?",
        options: ["ReLU and Sigmoid", "Tanh and Softmax", "Gaussian and Sigmoidal", "Leaky ReLU and Linear"],
        correctAnswer: "Gaussian and Sigmoidal"
    },
    {
        question: "What ensures radial symmetry in RBFN?",
        options: ["Sigmoidal function", "K-means clustering", "Gaussian function", "Maximum likelihood estimation"],
        correctAnswer: "Gaussian function"
    },
    {
        question: "Which layer in the RBFN contains radial basis functions?",
        options: ["Input Layer", "Hidden Layer", "Output Layer", "Fully Connected Layer"],
        correctAnswer: "Hidden Layer"
    },
    {
        question: "Which method is commonly used to determine the centers of receptive fields in RBFN?",
        options: ["Backpropagation", "Gradient Descent", "Maximum Likelihood Estimation", "Pooling"],
        correctAnswer: "Maximum Likelihood Estimation"
    },
    {
        question: "Which algorithm is often used for clustering receptive field centers in RBFN?",
        options: ["PCA", "K-means", "Random Forest", "Gradient Boosting"],
        correctAnswer: "K-means"
    },
    {
        question: "What is the main characteristic of Interpolation RBFN?",
        options: ["Allows noise in training data", "Uses fewer basis functions", "Finds exact outputs for all training data", "Uses random weight updates"],
        correctAnswer: "Finds exact outputs for all training data"
    },
    {
        question: "How does Approximation RBFN differ from Interpolation RBFN?",
        options: ["It finds exact outputs", "It assumes noise-free data", "It uses fewer basis functions than training patterns", "It does not use radial basis functions"],
        correctAnswer: "It uses fewer basis functions than training patterns"
    }
,
    {
        question: "What is the key difference between a crisp set and a fuzzy set?",
        options: ["Crisp sets allow uncertainty, fuzzy sets do not", "Crisp sets have fixed values, fuzzy sets vary", "Fuzzy sets have no defined elements", "Fuzzy sets only work with probability"],
        correctAnswer: "Crisp sets have fixed values, fuzzy sets vary"
    },
    {
        question: "What does a membership function represent in fuzzy logic?",
        options: ["The range of fuzzy numbers", "The probability of an element belonging to a set", "The total count of elements in a fuzzy set", "The fixed values in a crisp set"],
        correctAnswer: "The probability of an element belonging to a set"
    },
    {
        question: "Which value range does a membership function use?",
        options: ["0 to 10", "-1 to 1", "0 to 1", "Any real number"],
        correctAnswer: "0 to 1"
    },
    {
        question: "What does the Universe of Discourse in fuzzy logic represent?",
        options: ["The total number of fuzzy sets", "The set of all possible elements or inputs", "A collection of crisp sets", "A probability function"],
        correctAnswer: "The set of all possible elements or inputs"
    },
    {
        question: "How is a fuzzy set represented mathematically?",
        options: ["Using Boolean logic", "Using probability distributions", "Using membership functions", "Using crisp values"],
        correctAnswer: "Using membership functions"
    },
    {
        question: "What is the main advantage of fuzzy sets over crisp sets?",
        options: ["They have more elements", "They allow for uncertainty and variability", "They replace probability theory", "They are used in all AI systems"],
        correctAnswer: "They allow for uncertainty and variability"
    }
];

