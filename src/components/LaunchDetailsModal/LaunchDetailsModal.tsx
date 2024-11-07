import React from "react";
import {
  DialogRoot,
  DialogBackdrop,
  DialogContent,
  DialogCloseTrigger,
  DialogBody,
} from "../ui/dialog";
import { Box, Text, Link } from "@chakra-ui/react";
import Spinner from "../Spinner/Spinner";

interface LaunchDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  loading?: boolean;
  launch?: {
    mission_name: string;
    rocket: {
      rocket_name: string;
    };
    launch_site: {
      site_id: string;
      site_name: string;
    };
    links: {
      wikipedia?: string;
      video_link?: string;
    };
  };
}

const LaunchDetailsModal: React.FC<LaunchDetailsModalProps> = ({
  isOpen,
  onClose,
  launch,
  loading,
}) => {
  return (
    <DialogRoot open={isOpen} onOpenChange={onClose}>
      <DialogBackdrop />
      <DialogContent bg="rgba(0, 0, 0, 0.85)" color="white" borderRadius="md">
        <DialogCloseTrigger />
        <DialogBody>
          {loading ? (
            <Box display="flex" alignItems="center" justifyContent="center" minH="200px">
              <Spinner />
            </Box>
          ) : (
            <Box p={4}>
              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Mission: {launch?.mission_name || "N/A"}
              </Text>
              <Box mb={4}>
                <Text fontWeight="bold" mb={2}>
                  Rocket:
                </Text>
                <Text>{launch?.rocket?.rocket_name || "N/A"}</Text>
              </Box>
              <Box mb={4}>
                <Text fontWeight="bold" mb={2}>
                  Launch Location:
                </Text>
                <Text>{launch?.launch_site?.site_name || "Unknown"}</Text>
              </Box>
              <Box display="flex" flexDir="row" gap={2}>
                <Text fontWeight="bold" mb={2}>
                  Additional Links:
                </Text>
                {launch?.links?.wikipedia && (
                  <Text>
                    <Link href={launch.links.wikipedia} target="_blank" color="blue.300">
                      Wikipedia
                    </Link>
                  </Text>
                )}
                {launch?.links?.video_link && (
                  <Text>
                    <Link href={launch.links.video_link} target="_blank" color="blue.300">
                      Video Link
                    </Link>
                  </Text>
                )}
              </Box>
            </Box>
          )}
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

export default LaunchDetailsModal;
