const mcqs = [
    { 
        question: "What does a compiler do?", 
        options: ["Executes code line by line", "Converts entire source code at once", "Generates intermediate executable files", "Only translates object code"], 
        answer: "Converts entire source code at once"
    },
    { 
        question: "Which of the following executes code line by line?", 
        options: ["Compiler", "Assembler", "Interpreter", "Linker"], 
        answer: "Interpreter"
    },
    { 
        question: "In which stage does a compiler translate source code to object code?", 
        options: ["Execution", "Linking", "Compilation", "Debugging"], 
        answer: "Compilation"
    },
    { 
        question: "What is NOT true about an interpreter?", 
        options: ["It translates entire code in one go", "It executes code line by line", "It does not generate an intermediate executable", "It directly interprets and runs statements"], 
        answer: "It translates entire code in one go"
    },
    { 
        question: "Which of the following is an advantage of a compiler?", 
        options: ["Faster execution after compilation", "Requires less memory", "Executes without an intermediate file", "Does not generate object code"], 
        answer: "Faster execution after compilation"
    }
,
    { 
        question: "What is the first step in NLP processing?", 
        options: ["Preprocessing", "Compilation", "Source Program", "Execution"], 
        answer: "Source Program"
    },
    { 
        question: "Which stage in NLP scans for directives like #include and #define?", 
        options: ["Assembler", "Preprocessor", "Linker", "Compiler"], 
        answer: "Preprocessor"
    },
    { 
        question: "What does the compiler generate?", 
        options: ["Machine code", "Assembly language", "Relocatable machine code", "Executable file"], 
        answer: "Assembly language"
    },
    { 
        question: "Which of the following converts assembly language into machine code?", 
        options: ["Compiler", "Linker", "Assembler", "Preprocessor"], 
        answer: "Assembler"
    },
    { 
        question: "What is the final output of the NLP process?", 
        options: ["Assembly Code", "Relocatable Machine Code", "Machine Code", "Modified Source Program"], 
        answer: "Machine Code"
    },
    { 
        question: "Which of the following is an example of assembly language?", 
        options: ["ADD a, b", "10101010", "#define a 10", "int x = 10;"], 
        answer: "ADD a, b"
    }
,
    { 
        question: "What is another name for lexical analysis?", 
        options: ["Syntax Analysis", "Parsing", "Scanning", "Semantic Analysis"], 
        answer: "Scanning"
    },
    { 
        question: "What is the smallest logical unit in a program?", 
        options: ["Token", "Lexeme", "Pattern", "Syntax"], 
        answer: "Lexeme"
    },
    { 
        question: "Which of the following is NOT a function of lexical analysis?", 
        options: ["Token generation", "Syntax checking", "Removing white spaces", "Macro expansion"], 
        answer: "Syntax checking"
    },
    { 
        question: "What does a token represent?", 
        options: ["A specific word in a program", "Category of lexemes", "Binary code output", "A machine-level instruction"], 
        answer: "Category of lexemes"
    },
    { 
        question: "Which of the following is NOT a type of token?", 
        options: ["Keywords", "Identifiers", "Data types", "Operators"], 
        answer: "Data types"
    },
    { 
        question: "What is the pattern for an identifier?", 
        options: ["(Digit)+", "(Letter)(Letter/Digit)*", "(Special symbol)+", "(Operator)+ Digit"], 
        answer: "(Letter)(Letter/Digit)*"
    }
,
    { 
        question: "What is the first phase of the compilation process?", 
        options: ["Syntax Analysis", "Lexical Analysis", "Semantic Analysis", "Code Optimization"], 
        answer: "Lexical Analysis"
    },
    { 
        question: "Which phase checks whether the syntax tree follows language rules?", 
        options: ["Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Code Generation"], 
        answer: "Semantic Analysis"
    },
    { 
        question: "What is the output of the syntax analysis phase?", 
        options: ["Tokens", "Syntax Tree", "Machine Code", "Optimized Code"], 
        answer: "Syntax Tree"
    },
    { 
        question: "Which phase generates an intermediate representation of code?", 
        options: ["Code Optimization", "Code Generation", "Intermediate Code Generation", "Syntax Analysis"], 
        answer: "Intermediate Code Generation"
    },
    { 
        question: "What is the role of code optimization?", 
        options: ["Removes errors from the source code", "Optimizes execution speed and memory usage", "Converts tokens to syntax trees", "Generates tokens from source code"], 
        answer: "Optimizes execution speed and memory usage"
    },
    { 
        question: "Which phase produces the final machine code?", 
        options: ["Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Code Generation"], 
        answer: "Code Generation"
    }
,
    { 
        question: "What is the purpose of an input buffer in lexical analysis?", 
        options: ["To store machine code", "To store input symbols for scanning", "To execute compiled code", "To optimize code execution"], 
        answer: "To store input symbols for scanning"
    },
    { 
        question: "Which two pointers are used in lexical analysis?", 
        options: ["Lexeme Pointer and Code Generator", "Forward Pointer and Backward Pointer", "Lexeme Pointer and Forward Pointer", "Syntax Tree Pointer and Lexeme Pointer"], 
        answer: "Lexeme Pointer and Forward Pointer"
    },
    { 
        question: "What does the forward pointer (FP) do?", 
        options: ["It stays fixed", "It moves forward to match token patterns", "It moves backward", "It only scans delimiters"], 
        answer: "It moves forward to match token patterns"
    },
    { 
        question: "What happens when a token is found?", 
        options: ["LP moves forward, but FP stays", "Both LP and FP move to the next symbol", "FP moves back to LP", "A new input buffer is created"], 
        answer: "Both LP and FP move to the next symbol"
    },
    { 
        question: "How are tokens separated in an input buffer?", 
        options: ["Using spaces", "Using delimiters", "Using FP movement", "Using syntax trees"], 
        answer: "Using delimiters"
    }
,
    { 
        question: "Which of the following is a type of Top-Down Parsing?", 
        options: ["Operator Precedence Parsing", "LR(1) Parsing", "Recursive Descent Parsing", "SLR Parsing"], 
        answer: "Recursive Descent Parsing"
    },
    { 
        question: "What is the main characteristic of Bottom-Up Parsing?", 
        options: ["Constructs the parse tree from the root to leaves", "Constructs the parse tree from leaves to root", "Uses recursive calls for parsing", "Only works with LL(1) grammar"], 
        answer: "Constructs the parse tree from leaves to root"
    },
    { 
        question: "Which parsing method uses handle pruning?", 
        options: ["Top-Down Parsing", "Recursive Descent Parsing", "Bottom-Up Parsing", "LL(1) Parsing"], 
        answer: "Bottom-Up Parsing"
    },
    { 
        question: "Which type of parsing includes LR(1), SLR, and LALR?", 
        options: ["Top-Down Parsing", "Bottom-Up Parsing", "Recursive Descent Parsing", "Predictive Parsing"], 
        answer: "Bottom-Up Parsing"
    },
    { 
        question: "What is a Reduce-Reduce conflict in parsing?", 
        options: ["Occurs when the parser cannot decide between two reductions", "Occurs when the parser cannot decide between shift or reduce", "Occurs when the parser fails to generate tokens", "Occurs when parsing an ambiguous grammar"], 
        answer: "Occurs when the parser cannot decide between two reductions"
    }
];
