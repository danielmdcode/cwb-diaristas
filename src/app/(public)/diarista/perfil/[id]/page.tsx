import { prisma } from '@/lib/prisma'

export default async function ProfessionalsPage() {
  const professionals = await prisma.user.findMany({
    where: {
      role: Role.PROFESSIONAL,
      status: 'ACTIVE'
    },
    include: {
      userInfo: {
        select: {
          bio: true,
          rating: true
        }
      }
    }
  })

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profissionais</h1>
      <ul className="space-y-4">
        {professionals.map((professional) => (
          <li key={professional.id} className="border p-4 rounded">
            <p className="font-semibold">{professional.nome}</p>
            {professional.userInfo && (
              <>
                <p className="text-gray-600">{professional.userInfo.bio}</p>
                <p className="text-sm text-gray-500">Avaliação: {professional.userInfo.rating}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
} 