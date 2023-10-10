import {
  Stack, Heading, Text, Card, CardBody, CardHeader, CardFooter, Image, Button, useDisclosure
} from '@chakra-ui/react';
import relevantContent from '../resources/RelevantContent';

function PredictedContentProfiles({ predictedArea }) {
  //const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <>
      {relevantContent.information.map((info, index) => (
        <Card key={index} mb={8}>
          <CardBody>
            <Stack spacing='3'>
              <Heading fontSize="xl">
                {info.title}
              </Heading>
              <Text fontSize={["md", "lg"]}>
                {info.content}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      ))}

      <Stack mb={8} spacing={4}>
        {relevantContent.profiles.map((profile, index) => (
          <Card key={index} maxW='sm'> {/* maxW='sm' es para hacerlo pequeño en desktop */}
            <CardBody>
              <Image src={profile.image} borderRadius='lg' />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>
                  {profile.name}
                </Heading>
                <Text>
                  {profile.description}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Stack>
    </>
  );
}

export default PredictedContentProfiles;