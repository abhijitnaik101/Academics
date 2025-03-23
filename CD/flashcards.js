const flashcards = [
    { 
        question: "What is a compiler?", 
        answer: "A compiler converts the entire source code into machine code in a single step before execution."
    },
    { 
        question: "How does a compiler work?", 
        answer: "A compiler processes code in two stages: Compilation (source code to object code) and Execution (running the object code)."
    },
    { 
        question: "What is an interpreter?", 
        answer: "An interpreter executes source code line by line without generating an intermediate executable file."
    },
    { 
        question: "How does an interpreter execute code?", 
        answer: "An interpreter directly reads, interprets, and executes each statement sequentially."
    },
    { 
        question: "What is the first step in NLP processing?", 
        answer: "Writing the source program in a high-level language."
    },
    { 
        question: "What does the preprocessor do?", 
        answer: "The preprocessor scans the source code for directives like #include and #define before compilation."
    },
    { 
        question: "What happens in the compiler stage?", 
        answer: "The compiler translates the modified source code into assembly language while performing syntax analysis and optimization."
    },
    { 
        question: "What is an assembler?", 
        answer: "An assembler converts assembly language into machine code."
    },
    { 
        question: "What does a linker/loader do?", 
        answer: "The linker combines multiple object files into a single executable file."
    },
    { 
        question: "What is Assembly Language?", 
        answer: "Assembly Language is a low-level programming language using mnemonics instead of binary instructions."
    },
    { 
        question: "What is lexical analysis?", 
        answer: "Lexical analysis (scanning) converts source code into tokens for further processing."
    },
    { 
        question: "What are the functions of lexical analysis?", 
        answer: "1. Scans the source program\n2. Removes comments and white spaces\n3. Performs macro expansion\n4. Generates tokens"
    },
    { 
        question: "What is a lexeme?", 
        answer: "A lexeme is the smallest meaningful unit of a program, corresponding to a token."
    },
    { 
        question: "What is a token?", 
        answer: "A token is the classification of a lexeme, such as keywords, identifiers, operators, or literals."
    },
    { 
        question: "What are the five types of tokens?", 
        answer: "1. Keywords\n2. Identifiers\n3. Numbers\n4. Special symbols\n5. Operators"
    },
    { 
        question: "What is a pattern in lexical analysis?", 
        answer: "A pattern defines the rule for recognizing tokens in the source code."
    },
    { 
        question: "Give an example of a pattern for identifiers.", 
        answer: "Pattern: (Letter)(Letter/Digit)* (Identifiers must start with a letter and can include letters and digits.)"
    },
    { 
        question: "What is the first phase of compilation?", 
        answer: "Lexical Analysis."
    },
    { 
        question: "What does lexical analysis do?", 
        answer: "It converts the source code into tokens for syntax analysis."
    },
    { 
        question: "What is the output of syntax analysis?", 
        answer: "A syntax tree (parse tree)."
    },
    { 
        question: "What is the role of semantic analysis?", 
        answer: "Semantic analysis ensures that the syntax tree follows the language's semantic rules."
    },
    { 
        question: "Why is intermediate code generation needed?", 
        answer: "It acts as a bridge between high-level language and machine code, making translation more efficient."
    },
    { 
        question: "What does code optimization do?", 
        answer: "It improves efficiency by reducing execution time and memory usage."
    },
    { 
        question: "What happens in code generation?", 
        answer: "The final machine code is generated from the intermediate representation."
    },
    { 
        question: "What is the function of an input buffer in lexical analysis?", 
        answer: "It stores input symbols for efficient scanning and token generation."
    },
    { 
        question: "Which two pointers are used in lexical analysis?", 
        answer: "Lexeme Pointer (LP) and Forward Pointer (FP)."
    },
    { 
        question: "What happens when a token is found in the input buffer?", 
        answer: "LP and FP move to the next input symbol to continue scanning."
    },
    { 
        question: "How does the forward pointer (FP) function?", 
        answer: "It moves forward until it identifies a valid token pattern."
    },
    { 
        question: "What role do delimiters play in lexical analysis?", 
        answer: "They help separate tokens in the input buffer, ensuring proper token recognition."
    },
    { 
        question: "What are the two main types of parsing?", 
        answer: "Top-Down Parsing and Bottom-Up Parsing."
    },
    { 
        question: "What are the subtypes of Top-Down Parsing?", 
        answer: "Recursive Descent Parsing and Predictive Parsing (LL(1))."
    },
    { 
        question: "What are the subtypes of Bottom-Up Parsing?", 
        answer: "Operator Precedence Parsing and LR Parsing (LR(1), LL(0), SLR, LALR)."
    },
    { 
        question: "What is a handle in Bottom-Up Parsing?", 
        answer: "A handle is a substring that matches the right-hand side of a production and can be reduced to a non-terminal."
    },
    { 
        question: "What are the two conflicts in shift-reduce parsing?", 
        answer: "Shift-Reduce Conflict and Reduce-Reduce Conflict."
    }
];
