const differences = [
    {
        question: "What is the difference between a compiler and an interpreter?",
        topic1: "Compiler",
        topic2: "Interpreter",
        points: [
            ["Translates entire source code at once", "Executes code line by line"],
            ["Generates an intermediate executable file", "Does not generate an intermediate file"],
            ["Works in two stages: Compilation and Execution", "Directly interprets and runs statements"],
            ["Faster execution after compilation", "Slower execution due to real-time processing"],
            ["Requires more memory", "Requires less memory"],
            ["Detects all errors at once", "Stops at the first error"],
            ["Used in languages like C, C++", "Used in languages like Python, JavaScript"]
        ]
    },
    {
        question: "What is the difference between a compiler and an assembler?",
        topic1: "Compiler",
        topic2: "Assembler",
        points: [
            ["Translates high-level language to assembly", "Translates assembly language to machine code"],
            ["Checks syntax and optimizes code", "Does not perform syntax checks"],
            ["Generates assembly language as output", "Generates machine code as output"],
            ["Works on the entire code at once", "Works on one instruction at a time"],
            ["Used in programming languages like C, C++", "Used in low-level assembly programming"]
        ]
    },
    {
        question: "What is the difference between a lexeme and a token?",
        topic1: "Lexeme",
        topic2: "Token",
        points: [
            ["Smallest logical unit in a program", "Category to which a lexeme belongs"],
            ["Actual text present in the source code", "Represents a group of lexemes"],
            ["Example: 'int'", "Example: <keyword, int>"],
            ["Recognized by lexical analysis", "Passed to syntax analysis"]
        ]
    },
    {
        question: "What is the difference between lexical analysis and syntax analysis?",
        topic1: "Lexical Analysis",
        topic2: "Syntax Analysis",
        points: [
            ["Converts source code into tokens", "Checks token arrangement using grammar rules"],
            ["Removes white spaces and comments", "Checks if statements are structurally correct"],
            ["First phase of compilation", "Second phase after lexical analysis"],
            ["Deals with pattern recognition", "Deals with grammar rules"]
        ]
    },
    {
        question: "What is the difference between syntax analysis and semantic analysis?",
        topic1: "Syntax Analysis",
        topic2: "Semantic Analysis",
        points: [
            ["Checks syntax rules of the language", "Checks meaning and validity of statements"],
            ["Creates a syntax tree", "Creates an annotated syntax tree"],
            ["Errors include missing semicolons", "Errors include type mismatches"],
            ["Concerned with structure", "Concerned with logic"]
        ]
    },
    {
        question: "How do code optimization and code generation differ?",
        topic1: "Code Optimization",
        topic2: "Code Generation",
        points: [
            ["Improves code efficiency", "Converts optimized code into machine code"],
            ["Removes redundant operations", "Final step before execution"],
            ["Reduces execution time", "Produces executable binary format"],
            ["Enhances performance", "Generates target machine code"]
        ]
    },
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
        question: "How does Top-Down Parsing differ from Bottom-Up Parsing?",
        topic1: "Top-Down Parsing",
        topic2: "Bottom-Up Parsing",
        points: [
            ["Starts from the root and works downwards", "Starts from the leaves and works upwards"],
            ["Uses Recursive Descent and Predictive Parsing", "Uses Operator Precedence and LR Parsing"],
            ["Expands non-terminals into terminals", "Reduces terminals into non-terminals"],
            ["Needs backtracking in some cases", "Does not require backtracking"]
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
    },
    {
        question: "What is the difference between operator precedence parsing and recursive descent parsing?",
        topic1: "Operator Precedence Parsing",
        topic2: "Recursive Descent Parsing",
        points: [
            ["Uses precedence relations between operators", "Uses recursive functions to expand grammar"],
            ["No backtracking required", "Backtracking may be required"],
            ["Works well for arithmetic expressions", "Works for any grammar but may get stuck in loops"]
        ]
    }
];
