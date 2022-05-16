type User = {
    name: string;
    lastName: string;
    dateOfBirth: string;
    age: number;
    address?: string
}

const gabriel: User = {
    name: 'Felipe',
    lastName: "Ogata", 
    dateOfBirth: '01/01/2000',
    age: 22
}

// union types 
// coomo se fosse o ||
type logLevel = 'info' | 'error' | 'success' | 'warning'
function logMessage(message: string, level: logLevel) {
    console.log(`[${level}]${message}`);
}


// intersection types
// como se fosse o &&
type About = {
    bio: string, 
    interests: string[]

}

type Profile = User & About;
const userWithProfile: Profile = {
    name: 'Felipe',
    lastName: 'Ogata',
    dateOfBirth: '01/01/2000',
    bio: 'Estudante de desenvolvimento',
    interests: ['typescript', 'javascript', 'react'],
    age: 22
}