var alphabet = 'D';

switch (alphabet.toLowerCase()){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        document.write(alphabet+ "is a vowel.");
        break;
        case 'b': case 'c': case 'd': case 'f': case 'g':
        case 'h': case 'j': case 'k': case 'l': case 'm':
        case 'n': case 'p': case 'q': case 'r': case 's':
        case 't': case 'v': case 'w': case 'x': case 'y':
        case 'z':
            document.write(alphabet+ " is a consonent")
            break;
            default:
            document.write(alphabet+ "is not a alphabet")

}