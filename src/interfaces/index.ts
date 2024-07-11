interface CitationMetadata {
    citationSources: string[];
  }
  
  interface Candidate {
    author: string;
    content: string;
    citationMetadata: CitationMetadata;
  }
  
  interface Message {
    author: string;
    content: string;
    citationMetadata: CitationMetadata;
  }
  
  interface DataStructure {
    candidates: Candidate[];
    messages: Message[];
    filters: any[]; // Assuming filters can be of any type, adjust as per actual usage
  }
  
 
  