import PageContain from '@/components/PageContain';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageContain>{children}</PageContain>;
}
