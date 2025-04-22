import { getLastProfessionals } from '@/services/professionalService';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const professionals = await getLastProfessionals();
    return NextResponse.json(professionals);
  } catch (error) {
    console.error('Error fetching professionals:', error);
    return NextResponse.json(
      { error: 'Failed to fetch professionals' },
      { status: 500 }
    );
  }
} 