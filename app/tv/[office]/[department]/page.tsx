import { notFound } from 'next/navigation';
import { Television } from '@/components/intelligence';
import { offices } from '@/lib/demo';
export default async function Page({params}: {params: Promise<{office:string; department:string}>}) { const {office,department} = await params; if (!offices.some(o=>o.id===office) || !['sales','pm'].includes(department)) notFound(); return <Television office={office} department={department as 'sales'|'pm'}/>; }
