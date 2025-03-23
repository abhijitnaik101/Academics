const flashcards = [
    // **Introduction to Compilation**
    { question: "What is a compiler?", answer: "A compiler converts the entire source code into machine code in a single step before execution." },
    { question: "How does a compiler work?", answer: "It first compiles the code into object code and then executes it." },
    { question: "What is an interpreter?", answer: "An interpreter executes source code line by line without generating an intermediate file." },
    { question: "How does an interpreter differ from a compiler?", answer: "A compiler translates the whole code before execution, while an interpreter translates line by line during execution." },
    { question: "Explain the advantages and disadvantages of using a compiler over an interpreter.", answer: "Advantages: Faster execution, better optimization. Disadvantages: Debugging is harder because errors are detected after full compilation." },

    // **Phases of Compilation**
    { question: "What are the phases of compilation?", answer: "Lexical Analysis, Syntax Analysis, Semantic Analysis, Intermediate Code Generation, Code Optimization, and Code Generation." },
    { question: "What does the preprocessor do?", answer: "It processes directives like #include and #define before compilation." },
    { question: "What happens in the lexical analysis phase?", answer: "The source code is converted into tokens for further processing." },
    { question: "What happens in syntax analysis?", answer: "The tokens are checked against grammar rules to form a parse tree." },
    { question: "What does semantic analysis check?", answer: "It ensures that the syntax tree follows the language's semantic rules." },
    { question: "Why is intermediate code generation important?", answer: "It creates an intermediate representation of the code, making translation easier." },
    { question: "What does code optimization do?", answer: "It improves code efficiency by reducing execution time and memory usage." },
    { question: "What happens in code generation?", answer: "The final machine code is generated from the optimized intermediate representation." },
    { question: "Explain the step-by-step working of a compiler, including its major phases and their roles.", answer: "The compiler follows these phases: 1. Lexical Analysis: Converts code into tokens. 2. Syntax Analysis: Checks grammar. 3. Semantic Analysis: Checks logical correctness. 4. Intermediate Code Generation: Converts to an intermediate form. 5. Code Optimization: Enhances efficiency. 6. Code Generation: Produces final machine code." },

    // **Lexical Analysis**
    { question: "What is lexical analysis?", answer: "The process of converting source code into tokens." },
    { question: "What is a lexeme?", answer: "A lexeme is the smallest meaningful unit of a program." },
    { question: "What is a token?", answer: "A token is the classification of a lexeme, such as keywords, identifiers, operators, or literals." },
    { question: "What are the types of tokens?", answer: "1. Keywords, 2. Identifiers, 3. Numbers, 4. Special symbols, 5. Operators" },
    { question: "What is a pattern in lexical analysis?", answer: "A rule that defines how tokens are recognized in the source code." },
    { question: "What is the function of an input buffer?", answer: "It stores input symbols for efficient scanning and token generation." },
    { question: "Which two pointers are used in lexical analysis?", answer: "Lexeme Pointer (LP) and Forward Pointer (FP)." },
    { question: "What happens when a token is found in the input buffer?", answer: "LP and FP move to the next input symbol to continue scanning." },
    { question: "Explain the role of lexical analysis in a compiler and how it interacts with syntax analysis.", answer: "Lexical analysis converts source code into tokens, removing whitespace and comments. These tokens are then sent to syntax analysis to construct a parse tree following grammar rules." },

    // **Parsing Techniques**
    { question: "What are the types of parsing?", answer: "Top-Down Parsing and Bottom-Up Parsing." },
    { question: "What is recursive descent parsing?", answer: "A top-down parsing technique where functions are used for each grammar rule." },
    { question: "What is predictive parsing?", answer: "A type of recursive descent parsing that does not require backtracking (LL(1) parsing)." },
    { question: "What is bottom-up parsing?", answer: "A parsing technique that starts from the input tokens and constructs the parse tree in reverse order." },
    { question: "What are shift-reduce parsing techniques?", answer: "1. Operator Precedence Parsing\n2. LR Parsing (Simple LR, Canonical LR, LALR)" },
    { question: "What is a handle in bottom-up parsing?", answer: "A substring that matches the right-hand side of a production and can be reduced to a non-terminal." },
    { question: "Compare and contrast top-down parsing and bottom-up parsing.", answer: "Top-down parsing starts from the root and works downward, predicting productions. Bottom-up parsing starts from tokens and works upward to form the parse tree." },

    // **Intermediate Code Representation**
    { question: "What is intermediate code?", answer: "An abstract representation of the source program that makes translation to machine code easier." },
    { question: "What are three-address codes?", answer: "A type of intermediate code that uses at most three operands per instruction." },
    { question: "What is quadruples representation?", answer: "A format of intermediate code where instructions are represented as tuples (operator, arg1, arg2, result)." },
    { question: "What is triples representation?", answer: "Similar to quadruples but without an explicit result field, using indirect references instead." },
    { question: "Why is intermediate code generation important in compilers?", answer: "It helps achieve portability between high-level language and machine language by creating an intermediate representation." },

    // **Code Optimization**
    { question: "Why is code optimization needed?", answer: "To make the program faster and reduce resource usage." },
    { question: "What is constant folding?", answer: "Replacing constant expressions with their computed values at compile time." },
    { question: "What is dead code elimination?", answer: "Removing code that does not affect program execution." },
    { question: "What is loop optimization?", answer: "Improving loop performance using techniques like loop unrolling and invariant code motion." },

    // **Loading and Linking**
    { question: "What is linking?", answer: "Combining multiple object files into a single executable file." },
    { question: "What is the difference between static and dynamic linking?", answer: "Static linking includes dependencies at compile time, while dynamic linking loads them at runtime." },
    { question: "What is a loader?", answer: "A program that loads the executable file into memory for execution." },

    // **Final Questions**
    { question: "What is the role of registers in compilation?", answer: "They store temporary values and improve execution speed." },
    { question: "What is a parse error?", answer: "An error that occurs when the syntax of a program is incorrect." },
    { question: "What is the difference between syntax-directed translation and syntax-directed definition?", answer: "Syntax-directed translation associates actions with grammar rules, while syntax-directed definitions assign attributes to parse tree nodes." },
    { question: "What is the role of an activation record?", answer: "It stores information about function calls, such as parameters, local variables, and return addresses." },
    { question: "Explain the entire process of source code execution, from writing the code to program execution.", answer: "The source code undergoes preprocessing, compilation (lexical, syntax, semantic analysis), intermediate code generation, optimization, machine code generation, linking, loading, and final execution in memory." },

    // definition FLAT
    { question: "What is a DFA?", answer: "A Deterministic Finite Automaton (DFA) is a finite state machine where each state has exactly one transition for each input symbol." },
    { question: "What is an NFA?", answer: "A Non-deterministic Finite Automaton (NFA) is a finite state machine where a state can have multiple transitions for the same input or even ε (epsilon) transitions." },
    { question: "What is a regular expression?", answer: "A regular expression is a sequence of characters that define a search pattern, commonly used to describe regular languages." },

];
