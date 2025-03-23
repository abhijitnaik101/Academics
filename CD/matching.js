const matchingPairs = [
    {
        incorrect: { 
            "Compiler": "Executes line by line", 
            "Interpreter": "Translates entire code in one step",
            "Compilation": "Executes object code", 
            "Execution": "Translates source code",
            "Intermediate File": "Not required in compiler"
        },
        correct: { 
            "Compiler": "Translates entire code in one step", 
            "Interpreter": "Executes line by line",
            "Compilation": "Translates source code into object code", 
            "Execution": "Executes object code",
            "Intermediate File": "Not required in interpreter"
        }
    },
    {
        incorrect: { 
            "Speed": "Slower after compilation", 
            "Execution": "Two-stage process in interpreter",
            "Usage": "Common in scripting languages for compilers"
        },
        correct: { 
            "Speed": "Faster after compilation", 
            "Execution": "Two-stage process in compiler",
            "Usage": "Common in scripting languages for interpreters"
        }
    }
,
    {
        incorrect: { 
            "Source Program": "Scans for directives like #include", 
            "Preprocessor": "Generates executable machine code",
            "Compiler": "Converts machine code to assembly language",
            "Assembler": "Optimizes source code",
            "Linker/Loader": "Converts high-level language to assembly"
        },
        correct: { 
            "Source Program": "Written in a high-level language like C++ or Java", 
            "Preprocessor": "Scans for directives like #include",
            "Compiler": "Converts high-level language to assembly language",
            "Assembler": "Converts assembly language into machine code",
            "Linker/Loader": "Combines multiple object files into an executable"
        }
    },
    {
        incorrect: { 
            "Assembly Language": "Directly executable binary code", 
            "Relocatable Machine Code": "Final executable output",
            "Machine Code": "High-level language format"
        },
        correct: { 
            "Assembly Language": "Mnemonic version of machine code", 
            "Relocatable Machine Code": "Object file that can be linked later",
            "Machine Code": "Binary instructions executable by a computer"
        }
    }
,
    {
        incorrect: { 
            "Lexical Analysis": "Defines syntax rules for parsing", 
            "Lexeme": "A category of similar tokens",
            "Token": "A single character in a program",
            "Pattern": "The output of lexical analysis",
            "Keyword": "A user-defined name for variables"
        },
        correct: { 
            "Lexical Analysis": "Converts source code into tokens", 
            "Lexeme": "Smallest logical unit of a program",
            "Token": "Category to which a lexeme belongs",
            "Pattern": "Rule to recognize tokens",
            "Keyword": "Reserved word in a programming language"
        }
    },
    {
        incorrect: { 
            "Identifiers": "Symbols like +, -, *", 
            "Numbers": "Rules for recognizing tokens",
            "Operators": "Names assigned by programmers",
            "Special Symbols": "Logical units of a program"
        },
        correct: { 
            "Identifiers": "User-defined names for variables and functions", 
            "Numbers": "Numeric values in the code",
            "Operators": "Symbols like +, -, *",
            "Special Symbols": "Characters like {, }, ;, etc."
        }
    }
,
    {
        incorrect: { 
            "Lexical Analysis": "Generates machine code", 
            "Syntax Analysis": "Removes unnecessary lines of code", 
            "Semantic Analysis": "Creates tokens from source code", 
            "Intermediate Code Generation": "Checks syntax correctness", 
            "Code Optimization": "Creates a syntax tree", 
            "Code Generation": "Checks variable types and identifiers"
        },
        correct: { 
            "Lexical Analysis": "Converts source code into tokens", 
            "Syntax Analysis": "Creates a syntax tree from tokens", 
            "Semantic Analysis": "Checks if syntax follows language rules", 
            "Intermediate Code Generation": "Bridges high-level code and machine code", 
            "Code Optimization": "Improves code efficiency", 
            "Code Generation": "Produces final machine code"
        }
    },
    {
        incorrect: { 
            "First phase of compilation": "Syntax Analysis", 
            "Second phase of compilation": "Semantic Analysis", 
            "Final phase of compilation": "Lexical Analysis", 
            "Checks grammar of source code": "Code Optimization", 
            "Improves execution speed": "Intermediate Code Generation"
        },
        correct: { 
            "First phase of compilation": "Lexical Analysis", 
            "Second phase of compilation": "Syntax Analysis", 
            "Final phase of compilation": "Code Generation", 
            "Checks grammar of source code": "Syntax Analysis", 
            "Improves execution speed": "Code Optimization"
        }
    }
,
    {
        incorrect: { 
            "Lexeme Pointer (LP)": "Moves forward to find tokens", 
            "Forward Pointer (FP)": "Stays fixed and scans input", 
            "Input Buffer": "Generates final machine code", 
            "Delimiters": "Act as tokens in the input stream", 
            "Function of FP": "Checks grammar rules of tokens"
        },
        correct: { 
            "Lexeme Pointer (LP)": "Stays fixed while FP moves forward", 
            "Forward Pointer (FP)": "Moves forward to find tokens", 
            "Input Buffer": "Stores input symbols for scanning", 
            "Delimiters": "Separate tokens in the input buffer", 
            "Function of FP": "Moves ahead until a pattern match is found"
        }
    },
    {
        incorrect: { 
            "Primary function of input buffer": "To execute compiled code", 
            "Movement of LP": "Moves forward without stopping", 
            "Role of FP": "It always stays in one place", 
            "Process after token detection": "Only FP moves forward", 
            "Function of delimiters": "Used to generate machine code"
        },
        correct: { 
            "Primary function of input buffer": "To store and process input symbols", 
            "Movement of LP": "Stays until FP finds a match", 
            "Role of FP": "Moves forward until a token is found", 
            "Process after token detection": "Both LP and FP move to the next symbol", 
            "Function of delimiters": "Separate tokens in the input stream"
        }
    }
,
    {
        incorrect: { 
            "Recursive Descent Parsing": "Starts from the leaves and builds upwards", 
            "Bottom-Up Parsing": "Begins at the root and breaks into smaller parts", 
            "Handle": "A rule used for parsing operators", 
            "Shift-Reduce Conflict": "A conflict in Top-Down Parsing", 
            "Operator Grammar": "Allows epsilon (ε) production"
        },
        correct: { 
            "Recursive Descent Parsing": "Starts from the root and expands downward", 
            "Bottom-Up Parsing": "Begins at the leaves and moves towards the root", 
            "Handle": "A substring matching the RHS of a production", 
            "Shift-Reduce Conflict": "Occurs when the parser cannot decide between shift or reduce", 
            "Operator Grammar": "Does not allow epsilon (ε) production"
        }
    },
    {
        incorrect: { 
            "Top-Down Parsing": "Includes LR Parsing and Operator Precedence Parsing", 
            "Bottom-Up Parsing": "Uses Recursive Descent method", 
            "Predictive Parsing": "Requires backtracking", 
            "Reduce-Reduce Conflict": "Occurs in Recursive Descent Parsing", 
            "Handle Pruning": "A method used in Top-Down Parsing"
        },
        correct: { 
            "Top-Down Parsing": "Includes Recursive Descent and Predictive Parsing", 
            "Bottom-Up Parsing": "Includes LR Parsing and Operator Precedence Parsing", 
            "Predictive Parsing": "Does not require backtracking", 
            "Reduce-Reduce Conflict": "Occurs in Shift-Reduce Parsing", 
            "Handle Pruning": "A method used in Bottom-Up Parsing"
        }
    }
];
