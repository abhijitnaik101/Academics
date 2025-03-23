const differences = [
    {
        question: "What is the difference between a compiler and an interpreter?",
        topic1: "Compiler",
        topic2: "Interpreter",
        points: [
            ["Translates entire source code at once", "Executes code line by line"],
            ["Generates an intermediate executable file", "Does not generate an intermediate executable"],
            ["Works in two stages: Compilation and Execution", "Directly interprets and runs statements"],
            ["Faster execution after compilation", "Slower execution due to line-by-line processing"],
            ["Requires more memory", "Requires less memory"],
            ["Used in languages like C, C++", "Used in languages like Python, JavaScript"]
        ]
    }
,
    {
        question: "What is the difference between a compiler and an assembler?",
        topic1: "Compiler",
        topic2: "Assembler",
        points: [
            ["Translates high-level language to assembly", "Translates assembly language to machine code"],
            ["Checks syntax and optimizes code", "Does not perform syntax checks"],
            ["Generates assembly language as output", "Generates machine code as output"],
            ["Works on the entire code at once", "Works on one instruction at a time"]
        ]
    },
    {
        question: "How does an interpreter differ from a compiler?",
        topic1: "Interpreter",
        topic2: "Compiler",
        points: [
            ["Executes code line by line", "Translates entire code at once"],
            ["Slower execution due to real-time interpretation", "Faster execution after compilation"],
            ["Does not generate an intermediate file", "Generates an object file"],
            ["Commonly used in scripting languages like Python", "Used in languages like C, C++"]
        ]
    }
,
    {
        question: "What is the difference between a lexeme and a token?",
        topic1: "Lexeme",
        topic2: "Token",
        points: [
            ["Smallest logical unit in a program", "Category to which a lexeme belongs"],
            ["Actual text present in the source code", "Represents a group of lexemes"],
            ["Example: 'int'", "Example: <keyword, int>"]
        ]
    },
    {
        question: "How do keywords and identifiers differ?",
        topic1: "Keywords",
        topic2: "Identifiers",
        points: [
            ["Predefined words in a language", "User-defined names for variables/functions"],
            ["Example: if, else, for, while", "Example: age, studentName"],
            ["Cannot be changed by the programmer", "Can be chosen freely by the programmer"]
        ]
    },
    {
        question: "What is the difference between lexical analysis and syntax analysis?",
        topic1: "Lexical Analysis",
        topic2: "Syntax Analysis",
        points: [
            ["Converts source code into tokens", "Checks token arrangement using grammar rules"],
            ["Removes white spaces and comments", "Checks if statements are structurally correct"],
            ["First phase of compilation", "Second phase after lexical analysis"]
        ]
    }
,
    {
        question: "How does lexical analysis differ from syntax analysis?",
        topic1: "Lexical Analysis",
        topic2: "Syntax Analysis",
        points: [
            ["Converts source code into tokens", "Generates a syntax tree from tokens"],
            ["Removes white spaces and comments", "Checks whether token arrangement follows grammar"],
            ["First phase of compilation", "Second phase of compilation"]
        ]
    },
    {
        question: "What is the difference between syntax analysis and semantic analysis?",
        topic1: "Syntax Analysis",
        topic2: "Semantic Analysis",
        points: [
            ["Checks syntax rules of the language", "Checks meaning and validity of statements"],
            ["Creates a syntax tree", "Creates an annotated syntax tree"],
            ["Errors include missing semicolons", "Errors include type mismatches"]
        ]
    },
    {
        question: "How do code optimization and code generation differ?",
        topic1: "Code Optimization",
        topic2: "Code Generation",
        points: [
            ["Improves code efficiency", "Converts optimized code into machine code"],
            ["Removes redundant operations", "Final step before execution"],
            ["Reduces execution time", "Produces executable binary format"]
        ]
    }
,
    {
        question: "How do Lexeme Pointer (LP) and Forward Pointer (FP) differ?",
        topic1: "Lexeme Pointer (LP)",
        topic2: "Forward Pointer (FP)",
        points: [
            ["Stays fixed initially", "Moves forward to find tokens"],
            ["Marks the start of a token", "Stops when a token is matched"],
            ["Moves only after a token is found", "Moves continuously until a match"]
        ]
    },
    {
        question: "How do input buffer and token differ?",
        topic1: "Input Buffer",
        topic2: "Token",
        points: [
            ["Stores the entire input program", "Smallest meaningful unit in the program"],
            ["Contains all characters, including spaces", "Formed by recognizing patterns in input"],
            ["Processed by lexical analysis", "Passed to syntax analysis"]
        ]
    }
,
    {
        question: "How does Top-Down Parsing differ from Bottom-Up Parsing?",
        topic1: "Top-Down Parsing",
        topic2: "Bottom-Up Parsing",
        points: [
            ["Starts from the root and works downwards", "Starts from the leaves and works upwards"],
            ["Uses Recursive Descent and Predictive Parsing", "Uses Operator Precedence and LR Parsing"],
            ["Expands non-terminals into terminals", "Reduces terminals into non-terminals"]
        ]
    },
    {
        question: "What are the differences between Shift-Reduce and Reduce-Reduce Conflicts?",
        topic1: "Shift-Reduce Conflict",
        topic2: "Reduce-Reduce Conflict",
        points: [
            ["Occurs when parser cannot decide between shifting or reducing", "Occurs when parser cannot decide between multiple reductions"],
            ["Common in ambiguous grammars", "Happens when two reductions are possible at the same position"],
            ["Resolved using precedence rules", "Requires grammar modification to resolve"]
        ]
    }
];
