import EditableDocumentTitle from '@/components/documentBuilder/EditableDocumentTitle';
import { observer } from 'mobx-react-lite';

const DocumentBuilderHeader = observer(() => {
  return (
    <header className="flex items-center justify-center w-full">
      <EditableDocumentTitle />
    </header>
  );
});

export default DocumentBuilderHeader;
