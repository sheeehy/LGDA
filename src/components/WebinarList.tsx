import { getWebinarData } from "@/app/lib/sanity";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export async function WebinarList() {
  const webinars = await getWebinarData();

  return (
    <div>
      <h2>Webinars</h2>
      <ul>
        {webinars.map(
          (webinar: {
            _id: Key | null | undefined;
            title:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<AwaitedReactNode>
              | Iterable<ReactNode>
              | null
              | undefined;
            date: string | number | Date;
          }) => (
            <li key={webinar._id}>
              <h3>{webinar.title}</h3>
              <p>Date: {new Date(webinar.date).toLocaleDateString()}</p>
              {/* Add more details as needed */}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
