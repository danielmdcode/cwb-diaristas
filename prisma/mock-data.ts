// @ts-nocheck
const { PrismaClient, Role, UserStatus, VerificationStatus } = require('@prisma/client');

const prisma = new PrismaClient();

const professionalUsers = [
  {
    email: 'maria.silva@example.com',
    password: 'hashedPassword123',
    nome: 'Maria Silva',
    role: Role.PROFESSIONAL,
    status: UserStatus.ACTIVE,
    userInfo: {
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      phoneNumber: '(41) 98765-4321',
      bio: 'Profissional dedicada com 5 anos de experiência em limpeza residencial.',
      languages: ['Português', 'Inglês'],
      skills: ['Limpeza Residencial', 'Organização', 'Lavanderia'],
      rating: 4.8,
      price: 80.00,
      verificationStatus: VerificationStatus.VERIFIED,
      addresses: [{
        street: 'Rua das Flores',
        number: '123',
        complement: 'Apto 101',
        neighborhood: 'Centro',
        city: 'Curitiba',
        state: 'PR',
        zipCode: '80010-000'
      }]
    }
  },
  {
    email: 'joao.santos@example.com',
    password: 'hashedPassword123',
    nome: 'João Santos',
    role: Role.PROFESSIONAL,
    status: UserStatus.ACTIVE,
    userInfo: {
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      phoneNumber: '(41) 98765-4322',
      bio: 'Especialista em jardinagem e manutenção de áreas verdes.',
      languages: ['Português'],
      skills: ['Jardinagem', 'Poda de Plantas', 'Manutenção de Jardins'],
      rating: 4.9,
      price: 120.00,
      verificationStatus: VerificationStatus.VERIFIED,
      addresses: [{
        street: 'Avenida Brasil',
        number: '456',
        complement: 'Casa 2',
        neighborhood: 'Batel',
        city: 'Curitiba',
        state: 'PR',
        zipCode: '80240-000'
      }]
    }
  },
  {
    email: 'ana.pereira@example.com',
    password: 'hashedPassword123',
    nome: 'Ana Pereira',
    role: Role.PROFESSIONAL,
    status: UserStatus.ACTIVE,
    userInfo: {
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      phoneNumber: '(41) 98765-4323',
      bio: 'Profissional especializada em limpeza pós-obra e reformas.',
      languages: ['Português', 'Espanhol'],
      skills: ['Limpeza Pós-Obra', 'Limpeza Pesada', 'Organização'],
      rating: 4.7,
      price: 150.00,
      verificationStatus: VerificationStatus.VERIFIED,
      addresses: [{
        street: 'Rua das Palmeiras',
        number: '789',
        complement: 'Bloco A',
        neighborhood: 'Água Verde',
        city: 'Curitiba',
        state: 'PR',
        zipCode: '80240-000'
      }]
    }
  },
  {
    email: 'pedro.oliveira@example.com',
    password: 'hashedPassword123',
    nome: 'Pedro Oliveira',
    role: Role.PROFESSIONAL,
    status: UserStatus.ACTIVE,
    userInfo: {
      phoneNumber: '(41) 98765-4324',
      bio: 'Especialista em limpeza de carpetes e estofados.',
      languages: ['Português'],
      skills: ['Limpeza de Carpetes', 'Limpeza de Estofados', 'Higienização'],
      rating: 4.6,
      price: 200.00,
      verificationStatus: VerificationStatus.PENDING,
      addresses: [{
        street: 'Rua das Acácias',
        number: '321',
        complement: 'Casa',
        neighborhood: 'Boa Vista',
        city: 'Curitiba',
        state: 'PR',
        zipCode: '82540-000'
      }]
    }
  },
  {
    email: 'carla.rodrigues@example.com',
    password: 'hashedPassword123',
    nome: 'Carla Rodrigues',
    role: Role.PROFESSIONAL,
    status: UserStatus.ACTIVE,
    userInfo: {
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      phoneNumber: '(41) 98765-4325',
      bio: 'Profissional com experiência em limpeza comercial e industrial.',
      languages: ['Português', 'Inglês'],
      skills: ['Limpeza Comercial', 'Limpeza Industrial', 'Organização'],
      rating: 4.9,
      price: 180.00,
      verificationStatus: VerificationStatus.VERIFIED,
      addresses: [{
        street: 'Rua das Orquídeas',
        number: '654',
        complement: 'Apto 302',
        neighborhood: 'Cristo Rei',
        city: 'Curitiba',
        state: 'PR',
        zipCode: '80050-000'
      }]
    }
  },
  {
    email: 'lucas.ferreira@example.com',
    password: 'hashedPassword123',
    nome: 'Lucas Ferreira',
    role: Role.PROFESSIONAL,
    status: UserStatus.ACTIVE,
    userInfo: {
      phoneNumber: '(41) 98765-4326',
      bio: 'Especialista em limpeza de piscinas e áreas externas.',
      languages: ['Português'],
      skills: ['Limpeza de Piscinas', 'Manutenção de Áreas Externas', 'Jardinagem'],
      rating: 4.5,
      price: 250.00,
      verificationStatus: VerificationStatus.PENDING,
      addresses: [{
        street: 'Rua das Violetas',
        number: '987',
        complement: 'Casa',
        neighborhood: 'Santa Felicidade',
        city: 'Curitiba',
        state: 'PR',
        zipCode: '82020-000'
      }]
    }
  },
  {
    email: 'juliana.martins@example.com',
    password: 'hashedPassword123',
    nome: 'Juliana Martins',
    role: Role.PROFESSIONAL,
    status: UserStatus.ACTIVE,
    userInfo: {
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      phoneNumber: '(41) 98765-4327',
      bio: 'Profissional especializada em organização e limpeza de residências.',
      languages: ['Português', 'Inglês', 'Espanhol'],
      skills: ['Organização Residencial', 'Limpeza Residencial', 'Lavanderia'],
      rating: 4.8,
      price: 90.00,
      verificationStatus: VerificationStatus.VERIFIED,
      addresses: [{
        street: 'Rua das Margaridas',
        number: '147',
        complement: 'Apto 201',
        neighborhood: 'Mercês',
        city: 'Curitiba',
        state: 'PR',
        zipCode: '80810-000'
      }]
    }
  },
  {
    email: 'rafael.souza@example.com',
    password: 'hashedPassword123',
    nome: 'Rafael Souza',
    role: Role.PROFESSIONAL,
    status: UserStatus.ACTIVE,
    userInfo: {
      phoneNumber: '(41) 98765-4328',
      bio: 'Especialista em limpeza de vidros e fachadas.',
      languages: ['Português'],
      skills: ['Limpeza de Vidros', 'Limpeza de Fachadas', 'Trabalho em Altura'],
      rating: 4.7,
      price: 300.00,
      verificationStatus: VerificationStatus.PENDING,
      addresses: [{
        street: 'Rua das Tulipas',
        number: '258',
        complement: 'Casa',
        neighborhood: 'Bigorrilho',
        city: 'Curitiba',
        state: 'PR',
        zipCode: '80730-000'
      }]
    }
  },
  {
    email: 'fernanda.lima@example.com',
    password: 'hashedPassword123',
    nome: 'Fernanda Lima',
    role: Role.PROFESSIONAL,
    status: UserStatus.ACTIVE,
    userInfo: {
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      phoneNumber: '(41) 98765-4329',
      bio: 'Profissional com experiência em limpeza de condomínios.',
      languages: ['Português', 'Inglês'],
      skills: ['Limpeza de Condomínios', 'Organização', 'Lavanderia'],
      rating: 4.9,
      price: 160.00,
      verificationStatus: VerificationStatus.VERIFIED,
      addresses: [{
        street: 'Rua das Rosas',
        number: '369',
        complement: 'Apto 303',
        neighborhood: 'Batel',
        city: 'Curitiba',
        state: 'PR',
        zipCode: '80240-000'
      }]
    }
  },
  {
    email: 'gabriel.almeida@example.com',
    password: 'hashedPassword123',
    nome: 'Gabriel Almeida',
    role: Role.PROFESSIONAL,
    status: UserStatus.ACTIVE,
    userInfo: {
      phoneNumber: '(41) 98765-4330',
      bio: 'Especialista em limpeza de veículos e estacionamentos.',
      languages: ['Português'],
      skills: ['Limpeza de Veículos', 'Limpeza de Estacionamentos', 'Detalhamento'],
      rating: 4.6,
      price: 220.00,
      verificationStatus: VerificationStatus.PENDING,
      addresses: [{
        street: 'Rua das Hortênsias',
        number: '741',
        complement: 'Casa',
        neighborhood: 'Cabral',
        city: 'Curitiba',
        state: 'PR',
        zipCode: '80035-000'
      }]
    }
  }
];

async function cleanup() {
  try {
    // Delete all addresses
    await prisma.address.deleteMany();
    // Delete all userInfos
    await prisma.userInfo.deleteMany();
    // Delete all users
    await prisma.user.deleteMany();
    console.log('Cleanup completed successfully');
  } catch (error) {
    console.error('Error during cleanup:', error);
    throw error;
  }
}

async function seed() {
  try {
    for (const user of professionalUsers) {
      await prisma.user.create({
        data: {
          email: user.email,
          password: user.password,
          nome: user.nome,
          role: user.role,
          status: user.status,
          userInfo: {
            create: {
              avatar: user.userInfo.avatar,
              phoneNumber: user.userInfo.phoneNumber,
              bio: user.userInfo.bio,
              languages: user.userInfo.languages,
              skills: user.userInfo.skills,
              rating: user.userInfo.rating,
              price: user.userInfo.price,
              verificationStatus: user.userInfo.verificationStatus,
              addresses: {
                create: user.userInfo.addresses
              }
            }
          }
        }
      });
    }
    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error during seeding:', error);
    throw error;
  }
}

async function main() {
  try {
    // First clean up existing data
    await cleanup();
    // Then seed new data
    await seed();
  } catch (error) {
    console.error('Error in main function:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 