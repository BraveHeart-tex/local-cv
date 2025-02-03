import { getEducationSectionEntries } from '@/components/appHome/resumeTemplates/resumeTemplates.helpers';
import { londonTemplateStyles } from '@/components/appHome/resumeTemplates/london/london.styles';
import { Text, View } from '@react-pdf/renderer';
import {
  PDF_BODY_FONT_SIZE,
  pdfHtmlRenderers,
} from '@/components/appHome/resumeTemplates/resumeTemplates.constants';
import Html from 'react-pdf-html';
import { TemplateDataSection } from '@/lib/types/documentBuilder.types';

const LondonEducationSection = ({
  section,
}: {
  section: TemplateDataSection;
}) => {
  const sectionEntries = getEducationSectionEntries(section);
  if (sectionEntries.length === 0) return null;

  return (
    <View
      style={{
        ...londonTemplateStyles.section,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <Text
        style={{
          ...londonTemplateStyles.sectionLabel,
        }}
      >
        {section?.title}
      </Text>

      <View
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        {sectionEntries.map((item) => (
          <View key={item.entryId}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                fontSize: PDF_BODY_FONT_SIZE,
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  width: '30.5%',
                }}
              >
                {item.startDate}
                {item.endDate ? ` - ${item.endDate}` : null}
              </Text>
              <View
                style={{
                  width: '82%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Text
                  style={{
                    fontWeight: 'medium',
                    fontSize: 10.9,
                  }}
                >
                  {item.degree}
                  {item.school
                    ? `${item.degree ? ' - ' : ''}${item.school}`
                    : null}
                </Text>

                <Html
                  style={{
                    fontSize: PDF_BODY_FONT_SIZE,
                    marginTop: 7,
                    gap: 0,
                  }}
                  renderers={pdfHtmlRenderers}
                >
                  {item.description || ''}
                </Html>
              </View>
              <Text
                style={{
                  width: '10%',
                  textAlign: 'right',
                }}
              >
                {item.city}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
export default LondonEducationSection;
