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
      experience: '5 anos de experiência em limpeza residencial, especializada em organização e higienização de ambientes.',
      languages: ['Português', 'Inglês'],
      skills: ['Limpeza Residencial', 'Organização', 'Lavanderia'],
      price: 80.00,
      verificationStatus: VerificationStatus.VERIFIED,
      serviceZones: [
        {
          neighborhood: 'Centro',
          city: 'Curitiba',
          state: 'PR'
        },
        {
          neighborhood: 'Batel',
          city: 'Curitiba',
          state: 'PR'
        }
      ],
      availabilitySchedule: [
        {
          dayOfWeek: 'Segunda',
          startTime: '08:00',
          endTime: '18:00'
        },
        {
          dayOfWeek: 'Quarta',
          startTime: '08:00',
          endTime: '18:00'
        },
        {
          dayOfWeek: 'Sexta',
          startTime: '08:00',
          endTime: '18:00'
        }
      ],
      addresses: [{
        street: 'Rua das Flores',
        number: '123',
        complement: 'Apto 101',
        neighborhood: 'Centro',
        city: 'Curitiba',
        state: 'PR',
        zipCode: '80010-000'
      }],
      ratings: [
        {
          rating: 5.0,
          comment: 'Excelente profissional! Muito atenciosa e caprichosa.',
          isVerified: true
        },
        {
          rating: 4.5,
          comment: 'Ótimo trabalho, mas chegou um pouco atrasada.',
          isVerified: true
        }
      ]
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
      experience: '8 anos de experiência em jardinagem, com especialização em paisagismo e manutenção de jardins.',
      languages: ['Português'],
      skills: ['Jardinagem', 'Poda de Plantas', 'Manutenção de Jardins'],
      price: 120.00,
      verificationStatus: VerificationStatus.VERIFIED,
      serviceZones: [
        {
          neighborhood: 'Batel',
          city: 'Curitiba',
          state: 'PR'
        },
        {
          neighborhood: 'Água Verde',
          city: 'Curitiba',
          state: 'PR'
        }
      ],
      availabilitySchedule: [
        {
          dayOfWeek: 'Terça',
          startTime: '09:00',
          endTime: '17:00'
        },
        {
          dayOfWeek: 'Quinta',
          startTime: '09:00',
          endTime: '17:00'
        },
        {
          dayOfWeek: 'Sábado',
          startTime: '08:00',
          endTime: '14:00'
        }
      ],
      addresses: [{
        street: 'Avenida Brasil',
        number: '456',
        complement: 'Casa 2',
        neighborhood: 'Batel',
        city: 'Curitiba',
        state: 'PR',
        zipCode: '80240-000'
      }],
      ratings: [
        {
          rating: 5.0,
          comment: 'Profissional excepcional! Transformou completamente meu jardim.',
          isVerified: true
        },
        {
          rating: 4.8,
          comment: 'Muito competente e organizado.',
          isVerified: true
        }
      ]
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
      price: 150.00,
      verificationStatus: VerificationStatus.VERIFIED,
      serviceZones: [
        {
          neighborhood: 'Água Verde',
          city: 'Curitiba',
          state: 'PR'
        },
        {
          neighborhood: 'Boa Vista',
          city: 'Curitiba',
          state: 'PR'
        }
      ],
      availabilitySchedule: [
        {
          dayOfWeek: 'Segunda',
          startTime: '07:00',
          endTime: '19:00'
        },
        {
          dayOfWeek: 'Quarta',
          startTime: '07:00',
          endTime: '19:00'
        },
        {
          dayOfWeek: 'Sexta',
          startTime: '07:00',
          endTime: '19:00'
        }
      ],
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
      price: 200.00,
      verificationStatus: VerificationStatus.PENDING,
      serviceZones: [
        {
          neighborhood: 'Boa Vista',
          city: 'Curitiba',
          state: 'PR'
        },
        {
          neighborhood: 'Cristo Rei',
          city: 'Curitiba',
          state: 'PR'
        }
      ],
      availabilitySchedule: [
        {
          dayOfWeek: 'Terça',
          startTime: '08:00',
          endTime: '18:00'
        },
        {
          dayOfWeek: 'Quinta',
          startTime: '08:00',
          endTime: '18:00'
        },
        {
          dayOfWeek: 'Sábado',
          startTime: '08:00',
          endTime: '14:00'
        }
      ],
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
      price: 180.00,
      verificationStatus: VerificationStatus.VERIFIED,
      serviceZones: [
        {
          neighborhood: 'Cristo Rei',
          city: 'Curitiba',
          state: 'PR'
        },
        {
          neighborhood: 'Santa Felicidade',
          city: 'Curitiba',
          state: 'PR'
        }
      ],
      availabilitySchedule: [
        {
          dayOfWeek: 'Segunda',
          startTime: '06:00',
          endTime: '18:00'
        },
        {
          dayOfWeek: 'Quarta',
          startTime: '06:00',
          endTime: '18:00'
        },
        {
          dayOfWeek: 'Sexta',
          startTime: '06:00',
          endTime: '18:00'
        }
      ],
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
      price: 250.00,
      verificationStatus: VerificationStatus.PENDING,
      serviceZones: [
        {
          neighborhood: 'Santa Felicidade',
          city: 'Curitiba',
          state: 'PR'
        },
        {
          neighborhood: 'Mercês',
          city: 'Curitiba',
          state: 'PR'
        }
      ],
      availabilitySchedule: [
        {
          dayOfWeek: 'Terça',
          startTime: '07:00',
          endTime: '17:00'
        },
        {
          dayOfWeek: 'Quinta',
          startTime: '07:00',
          endTime: '17:00'
        },
        {
          dayOfWeek: 'Sábado',
          startTime: '07:00',
          endTime: '13:00'
        }
      ],
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
      price: 90.00,
      verificationStatus: VerificationStatus.VERIFIED,
      serviceZones: [
        {
          neighborhood: 'Mercês',
          city: 'Curitiba',
          state: 'PR'
        },
        {
          neighborhood: 'Bigorrilho',
          city: 'Curitiba',
          state: 'PR'
        }
      ],
      availabilitySchedule: [
        {
          dayOfWeek: 'Segunda',
          startTime: '08:00',
          endTime: '18:00'
        },
        {
          dayOfWeek: 'Quarta',
          startTime: '08:00',
          endTime: '18:00'
        },
        {
          dayOfWeek: 'Sexta',
          startTime: '08:00',
          endTime: '18:00'
        }
      ],
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
      price: 300.00,
      verificationStatus: VerificationStatus.PENDING,
      serviceZones: [
        {
          neighborhood: 'Bigorrilho',
          city: 'Curitiba',
          state: 'PR'
        },
        {
          neighborhood: 'Batel',
          city: 'Curitiba',
          state: 'PR'
        }
      ],
      availabilitySchedule: [
        {
          dayOfWeek: 'Terça',
          startTime: '09:00',
          endTime: '17:00'
        },
        {
          dayOfWeek: 'Quinta',
          startTime: '09:00',
          endTime: '17:00'
        },
        {
          dayOfWeek: 'Sábado',
          startTime: '08:00',
          endTime: '14:00'
        }
      ],
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
      price: 160.00,
      verificationStatus: VerificationStatus.VERIFIED,
      serviceZones: [
        {
          neighborhood: 'Batel',
          city: 'Curitiba',
          state: 'PR'
        },
        {
          neighborhood: 'Centro',
          city: 'Curitiba',
          state: 'PR'
        }
      ],
      availabilitySchedule: [
        {
          dayOfWeek: 'Segunda',
          startTime: '07:00',
          endTime: '19:00'
        },
        {
          dayOfWeek: 'Quarta',
          startTime: '07:00',
          endTime: '19:00'
        },
        {
          dayOfWeek: 'Sexta',
          startTime: '07:00',
          endTime: '19:00'
        }
      ],
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
      price: 220.00,
      verificationStatus: VerificationStatus.PENDING,
      serviceZones: [
        {
          neighborhood: 'Centro',
          city: 'Curitiba',
          state: 'PR'
        },
        {
          neighborhood: 'Água Verde',
          city: 'Curitiba',
          state: 'PR'
        }
      ],
      availabilitySchedule: [
        {
          dayOfWeek: 'Terça',
          startTime: '08:00',
          endTime: '18:00'
        },
        {
          dayOfWeek: 'Quinta',
          startTime: '08:00',
          endTime: '18:00'
        },
        {
          dayOfWeek: 'Sábado',
          startTime: '08:00',
          endTime: '14:00'
        }
      ],
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
  }
];

async function cleanup() {
  try {
    // Delete all ratings first
    await prisma.rating.deleteMany();
    // Delete all UserServiceZones
    await prisma.userServiceZones.deleteMany();
    // Delete all addresses
    await prisma.address.deleteMany();
    // Delete all availability schedules
    await prisma.schedule.deleteMany();
    // Delete all service zones
    await prisma.serviceZones.deleteMany();
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
    // First create all service zones
    const serviceZones = await Promise.all(
      professionalUsers.flatMap(user => 
        user.userInfo.serviceZones.map(async (zone) => {
          return prisma.serviceZones.create({
            data: {
              neighborhood: zone.neighborhood,
              city: zone.city,
              state: zone.state
            }
          });
        })
      )
    );

    // Then create users with their userInfo
    for (const user of professionalUsers) {
      const createdUser = await prisma.user.create({
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
              experience: user.userInfo.experience,
              languages: user.userInfo.languages,
              skills: user.userInfo.skills,
              rating: user.userInfo.rating,
              price: user.userInfo.price,
              verificationStatus: user.userInfo.verificationStatus
            }
          }
        },
        include: {
          userInfo: true
        }
      });

      // Create availability schedules
      await prisma.schedule.createMany({
        data: user.userInfo.availabilitySchedule.map(schedule => ({
          dayOfWeek: schedule.dayOfWeek,
          startTime: schedule.startTime,
          endTime: schedule.endTime,
          userInfoId: createdUser.userInfo.id
        }))
      });

      // Create UserServiceZones relationships
      await Promise.all(
        user.userInfo.serviceZones.map(async (zone) => {
          const serviceZone = serviceZones.find(
            sz => sz.neighborhood === zone.neighborhood && 
                 sz.city === zone.city && 
                 sz.state === zone.state
          );
          
          if (serviceZone) {
            await prisma.userServiceZones.create({
              data: {
                userInfoId: createdUser.userInfo.id,
                serviceZoneId: serviceZone.id
              }
            });
          }
        })
      );

      // Create ratings
      if (user.userInfo.ratings) {
        // Primeiro, vamos criar um usuário cliente para fazer as avaliações
        const clientUser = await prisma.user.create({
          data: {
            email: `client${user.email}`,
            password: 'hashedPassword123',
            nome: `Cliente de ${user.nome}`,
            role: Role.USER,
            status: UserStatus.ACTIVE,
            userInfo: {
              create: {
                avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
                phoneNumber: '(41) 99999-9999',
                bio: 'Cliente satisfeito',
                languages: ['Português'],
                skills: [],
                price: 0,
                verificationStatus: VerificationStatus.VERIFIED
              }
            }
          },
          include: {
            userInfo: true
          }
        });

        await Promise.all(
          user.userInfo.ratings.map(async (rating) => {
            await prisma.rating.create({
              data: {
                rating: rating.rating,
                comment: rating.comment,
                isVerified: rating.isVerified,
                userInfoId: createdUser.userInfo.id, // ID do profissional sendo avaliado
                ratedById: clientUser.id // ID do cliente que fez a avaliação
              }
            });
          })
        );
      }
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