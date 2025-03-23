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
        question: "What is the purpose of an assembler?", 
        options: ["Converts high-level language to machine code", "Converts assembly language to machine code", "Links multiple object files", "Executes binary code"], 
        answer: "Converts assembly language to machine code"
    },
    { 
        question: "What is an intermediate code?", 
        options: ["Code between source and machine code", "Final compiled code", "Syntax tree representation", "Binary executable code"], 
        answer: "Code between source and machine code"
    },
    { 
        question: "What does the linker do?", 
        options: ["Links object files to create executable", "Converts source code to object code", "Executes machine code", "Optimizes compiled code"], 
        answer: "Links object files to create executable"
    },
    { 
        question: "Which type of language does a compiler process?", 
        options: ["Machine language", "Assembly language", "High-level language", "Intermediate language"], 
        answer: "High-level language"
    },
    { 
        question: "What is the main difference between a compiler and an interpreter?", 
        options: ["Compiler translates code line by line, interpreter translates all at once", "Compiler translates all at once, interpreter translates line by line", "Both are the same", "Interpreter generates an intermediate file"], 
        answer: "Compiler translates all at once, interpreter translates line by line"
    },
    { 
        question: "Which of the following is NOT a phase of compilation?", 
        options: ["Lexical Analysis", "Syntax Analysis", "Parsing", "Token Execution"], 
        answer: "Token Execution"
    },
    { 
        question: "What is the purpose of lexical analysis?", 
        options: ["Convert source code into machine code", "Convert source code into tokens", "Check syntax of code", "Optimize the code"], 
        answer: "Convert source code into tokens"
    },
    { 
        question: "Which phase of the compiler removes comments and white spaces?", 
        options: ["Lexical Analysis", "Syntax Analysis", "Code Optimization", "Semantic Analysis"], 
        answer: "Lexical Analysis"
    },
    { 
        question: "What is the output of syntax analysis?", 
        options: ["Tokens", "Syntax Tree", "Machine Code", "Optimized Code"], 
        answer: "Syntax Tree"
    },
    { 
        question: "Which phase is responsible for checking type errors?", 
        options: ["Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Code Generation"], 
        answer: "Semantic Analysis"
    },
    { 
        question: "Which phase generates an intermediate representation of the code?", 
        options: ["Lexical Analysis", "Code Optimization", "Intermediate Code Generation", "Code Generation"], 
        answer: "Intermediate Code Generation"
    },
    { 
        question: "What is the purpose of code optimization?", 
        options: ["Reduce execution time and memory usage", "Fix syntax errors", "Convert high-level code to assembly", "Generate machine code"], 
        answer: "Reduce execution time and memory usage"
    },
    { 
        question: "Which phase of the compiler produces the final machine code?", 
        options: ["Lexical Analysis", "Syntax Analysis", "Code Generation", "Semantic Analysis"], 
        answer: "Code Generation"
    },
    { 
        question: "What is a lexeme?", 
        options: ["A smallest logical unit of a program", "A set of keywords", "A syntax tree node", "An error in lexical analysis"], 
        answer: "A smallest logical unit of a program"
    },
    { 
        question: "Which of the following is NOT a type of token?", 
        options: ["Keywords", "Identifiers", "Syntax Tree", "Operators"], 
        answer: "Syntax Tree"
    },
    { 
        question: "What is the output of lexical analysis?", 
        options: ["Syntax Tree", "Tokens", "Machine Code", "Intermediate Code"], 
        answer: "Tokens"
    },
    { 
        question: "Which parsing technique starts from the root and goes downward?", 
        options: ["Bottom-Up Parsing", "Top-Down Parsing", "Shift-Reduce Parsing", "Operator Precedence Parsing"], 
        answer: "Top-Down Parsing"
    },
    { 
        question: "What is the purpose of an input buffer in lexical analysis?", 
        options: ["To store input symbols for scanning", "To store machine code", "To execute compiled code", "To optimize code execution"], 
        answer: "To store input symbols for scanning"
    },
    { 
        question: "Which of the following is a Bottom-Up Parsing method?", 
        options: ["LL Parsing", "Recursive Descent Parsing", "LR Parsing", "Predictive Parsing"], 
        answer: "LR Parsing"
    },
    { 
        question: "What is the purpose of handle pruning in parsing?", 
        options: ["To remove errors", "To reduce the parse tree", "To optimize code execution", "To construct a syntax tree"], 
        answer: "To reduce the parse tree"
    },
    { 
        question: "What type of parsing method does an LR parser use?", 
        options: ["Top-Down Parsing", "Bottom-Up Parsing", "Recursive Descent Parsing", "Predictive Parsing"], 
        answer: "Bottom-Up Parsing"
    },
    { 
        question: "Which conflict occurs when a parser cannot decide between shifting and reducing?", 
        options: ["Shift-Reduce Conflict", "Reduce-Reduce Conflict", "Lexical Conflict", "Syntax Error"], 
        answer: "Shift-Reduce Conflict"
    },
    { 
        question: "What is a Reduce-Reduce Conflict?", 
        options: ["Occurs when multiple reductions are possible", "Occurs when shifting and reducing are confused", "Occurs due to lexical errors", "Occurs when a syntax tree is incomplete"], 
        answer: "Occurs when multiple reductions are possible"
    }
,
    { 
        question: "What is a symbol table used for in a compiler?", 
        options: ["Storing machine code", "Managing variable names and types", "Optimizing execution speed", "Generating syntax trees"], 
        answer: "Managing variable names and types"
    },
    { 
        question: "Which compiler phase is responsible for error handling?", 
        options: ["Lexical Analysis", "Semantic Analysis", "Syntax Analysis", "All of the above"], 
        answer: "All of the above"
    },
    { 
        question: "Which of the following is NOT a function of the lexical analyzer?", 
        options: ["Token generation", "Error detection", "Parsing", "Symbol table creation"], 
        answer: "Parsing"
    },
    { 
        question: "Which of the following tools is NOT used in compiler construction?", 
        options: ["Lex", "Yacc", "Debugger", "Assembler"], 
        answer: "Debugger"
    },
    { 
        question: "What does a preprocessor do?", 
        options: ["Translates assembly language", "Handles macro expansion and file inclusion", "Generates machine code", "Performs semantic checks"], 
        answer: "Handles macro expansion and file inclusion"
    },
    { 
        question: "What is the main purpose of an activation record?", 
        options: ["Store function-related data like parameters and return address", "Optimize machine code", "Handle syntax errors", "Reduce execution time"], 
        answer: "Store function-related data like parameters and return address"
    },
    { 
        question: "Which of the following is NOT a type of intermediate code representation?", 
        options: ["Abstract Syntax Tree", "Three-Address Code", "Quadruples", "Binary Executable"], 
        answer: "Binary Executable"
    },
    { 
        question: "What is peephole optimization?", 
        options: ["A global optimization technique", "An optimization done in small code segments", "Error detection in parsing", "Reducing redundant function calls"], 
        answer: "An optimization done in small code segments"
    },
    { 
        question: "What is the purpose of register allocation?", 
        options: ["Assign variables to CPU registers for faster execution", "Convert high-level code to machine code", "Reduce code redundancy", "Store error logs"], 
        answer: "Assign variables to CPU registers for faster execution"
    },
    { 
        question: "Which of the following is a dynamic memory allocation strategy?", 
        options: ["Stack allocation", "Heap allocation", "Static allocation", "Lexical allocation"], 
        answer: "Heap allocation"
    },
    { 
        question: "What is backpatching in code generation?", 
        options: ["A technique for syntax error correction", "A method for generating object code", "Filling in missing addresses in intermediate code", "A debugging method"], 
        answer: "Filling in missing addresses in intermediate code"
    },
    { 
        question: "What is the role of a garbage collector?", 
        options: ["Optimizes object code", "Reclaims unused memory automatically", "Compiles source code to machine code", "Manages CPU execution"], 
        answer: "Reclaims unused memory automatically"
    },
    { 
        question: "Which of the following statements is true about recursion in programming?", 
        options: ["It is always less efficient than iteration", "It requires a base case to prevent infinite loops", "It cannot be implemented in high-level languages", "It does not use a stack"], 
        answer: "It requires a base case to prevent infinite loops"
    },
    { 
        question: "Which of the following is NOT a parsing technique?", 
        options: ["Recursive Descent Parsing", "Shift-Reduce Parsing", "Lexical Parsing", "Predictive Parsing"], 
        answer: "Lexical Parsing"
    },
    { 
        question: "Which technique is used in LL parsers?", 
        options: ["Bottom-up parsing", "Top-down parsing with backtracking", "Top-down parsing without backtracking", "Shift-reduce parsing"], 
        answer: "Top-down parsing without backtracking"
    },
    { 
        question: "Which type of grammar is required for a parser to work without backtracking?", 
        options: ["Ambiguous grammar", "Context-free grammar", "Left-recursive grammar", "Right-recursive grammar"], 
        answer: "Context-free grammar"
    },
    { 
        question: "What is the primary goal of syntax-directed translation?", 
        options: ["Generate machine code directly", "Map syntax tree nodes to intermediate code", "Eliminate redundant code", "Optimize object code"], 
        answer: "Map syntax tree nodes to intermediate code"
    },
    { 
        question: "What does DAG stand for in compiler design?", 
        options: ["Directed Acyclic Graph", "Dynamic Allocation Graph", "Data Address Generator", "Dual Address Graph"], 
        answer: "Directed Acyclic Graph"
    },
    { 
        question: "Which of the following describes dynamic scoping?", 
        options: ["Variables are bound at compile time", "Variables are resolved based on function call stack", "Only local variables are used", "It is more efficient than static scoping"], 
        answer: "Variables are resolved based on function call stack"
    },
    { 
        question: "Which optimization technique removes common subexpressions?", 
        options: ["Dead code elimination", "Constant folding", "Loop unrolling", "Common subexpression elimination"], 
        answer: "Common subexpression elimination"
    },
    { 
        question: "What is constant folding?", 
        options: ["Replacing constants with variables", "Computing constant expressions at compile-time", "Optimizing loop conditions", "Expanding macros"], 
        answer: "Computing constant expressions at compile-time"
    },
    { 
        question: "What is the purpose of inline expansion?", 
        options: ["Increase execution time", "Reduce function call overhead", "Convert machine code to assembly", "Reduce memory allocation"], 
        answer: "Reduce function call overhead"
    },
    { 
        question: "Which of the following parsing techniques is most suitable for real-time systems?", 
        options: ["Top-down parsing", "Bottom-up parsing", "Recursive descent parsing", "Predictive parsing"], 
        answer: "Predictive parsing"
    },
    { 
        question: "What is the output of an interpreter?", 
        options: ["Machine code", "Syntax tree", "Intermediate code", "Direct execution of statements"], 
        answer: "Direct execution of statements"
    },
    { 
        question: "Which type of parser uses lookahead symbols?", 
        options: ["LL(1) parser", "LR parser", "Recursive Descent parser", "Shift-reduce parser"], 
        answer: "LL(1) parser"
    },
    { 
        question: "What is the purpose of a bootstrapping compiler?", 
        options: ["Compile itself", "Execute machine code", "Translate high-level to low-level code", "Generate parse trees"], 
        answer: "Compile itself"
    },
    { 
        question: "Which of the following does NOT occur in lexical analysis?", 
        options: ["Tokenization", "Error handling", "Syntax checking", "White space removal"], 
        answer: "Syntax checking"
    },
    { 
        question: "What does an optimizing compiler do?", 
        options: ["Translates code more efficiently", "Reduces runtime execution time", "Minimizes memory usage", "All of the above"], 
        answer: "All of the above"
    },
    { 
        question: "Which of the following best describes tail recursion?", 
        options: ["Recursive call is the last operation in a function", "Recursion is replaced with a loop", "It increases memory usage", "It requires a stack"], 
        answer: "Recursive call is the last operation in a function"
    }
];
