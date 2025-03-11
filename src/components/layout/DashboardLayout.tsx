import Head from "next/head";

export const DashboardLayout: React.FC<{
    title?: string;
    children: React.ReactNode;
}> = ({ children, title }) => {
  return <>
    <Head>
      <title>{title ? title : "Home"}</title>
    </Head>  
    {children} 
  </>
  ;
};