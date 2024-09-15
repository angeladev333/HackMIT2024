import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NodeTabs() {
  const numTabs = 2;
  return (
    <div className="w-full max-w-full">
      <Tabs defaultValue="tab-1 " className={`grid grid-cols-${numTabs}`}>
        <TabsList>
          <TabsTrigger value="tab-1" className="w-full col-span-1">
            Tab 1
          </TabsTrigger>
          <TabsTrigger value="tab-2" className="w-full col-span-1">
            Tab 2
          </TabsTrigger>
        </TabsList>
        {/* <TabsContent value="tab-1">
          <div>
            <h1>Hello</h1>
          </div>
        </TabsContent>
        <TabsContent value="tab-2">
          <div>
            <h1>Bonjour</h1>
          </div>
        </TabsContent> */}
      </Tabs>
    </div>
  );
}
